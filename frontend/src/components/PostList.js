
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook for navigation
import axios from 'axios';
import PostCard from './PostCard';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // Initialize the navigation hook

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };
    fetchPosts();
  }, []);

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post._id !== postId)); // Remove the deleted post from the list
  };

  return (
    <div>
      {posts.length === 0 ? "" :<h1 className="text-2xl  font-extrabold text-center text-gray-800 mb-10">Blog Posts</h1>}

      {posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-gray-600 text-lg">No posts available. Create your first post!</p>
          <button
            onClick={() => navigate('/create')} // Navigate to the create post page
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Create Post
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} onDelete={handleDeletePost} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
