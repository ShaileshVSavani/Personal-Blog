
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const PostCard = ({ post, onDelete }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`http://localhost:5000/api/posts/${post._id}`);
        onDelete(post._id); // Call the onDelete callback to update the UI
      } catch (error) {
        console.error('Error deleting the post:', error.message);
      }
    }
  };

  return (
    <div className="border p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.content.slice(0, 100)}...</p>
      <div className="mt-2">
        <Link to={`/post/${post._id}`} className="text-blue-500">Read More</Link>
        <Link to={`/edit/${post._id}`} className="ml-4 text-green-500">Edit</Link>
        <button 
          onClick={handleDelete} 
          className="ml-4 text-red-500"
        >
          Delete
        </button>
        <button
            onClick={() => navigate('/create')} // Navigate to the create post page
            className="ml-4 text-blue-500 mx-auto"
          >
            Create Post
          </button>
      </div>
    </div>
  );
};

export default PostCard;
