
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const navigate = useNavigate(); // Hook for navigation
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post details:', error.message);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Title: {post.title}</h1>
      <p className="mt-2">Content: {post.content}</p>
      <p className="text-sm text-gray-500">Posted on: {new Date(post.createdAt).toLocaleDateString()}</p>
      {/* Back button navigates to the home route */}
      <button
        onClick={() => navigate('/')} // Navigate to the list of all posts
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        Back to All Posts
      </button>
    </div>
  );
};

export default PostDetail;
