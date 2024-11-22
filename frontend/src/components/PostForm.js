
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(''); // State to handle validation errors
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/posts/${id}`)
        .then((response) => {
          setTitle(response.data.title);
          setContent(response.data.content);
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic: Check if fields are empty
    if (!title.trim() || !content.trim()) {
      setError('All fields are required.');
      return;
    }

    setError(''); // Clear error message on successful validation

    const postData = { title, content };
    if (id) {
      axios.put(`http://localhost:5000/api/posts/${id}`, postData)
        .then(() => navigate(`/post/${id}`))
        .catch((error) => console.error('Error updating post:', error));
    } else {
      axios.post('http://localhost:5000/api/posts', postData)
        .then(() => navigate('/'))
        .catch((error) => console.error('Error creating post:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        className="w-full p-2 border rounded"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post Content"
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {id ? 'Update Post' : 'Create Post'}
      </button>
    </form>
  );
};

export default PostForm;
