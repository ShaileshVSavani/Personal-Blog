// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PostList from './components/PostList';
// import PostForm from './components/PostForm';
// import PostDetails from './components/PostDetails';

// function App() {
//   return (
//     <Router>
//       <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold text-center mb-8">Personal Blog</h1>
//         <Routes>
//           <Route path="/" element={<PostList />} />
//           <Route path="/create" element={<PostForm />} />
//           <Route path="/edit/:id" element={<PostForm />} />
//           <Route path="/post/:id" element={<PostDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostDetails from './components/PostDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
            Personal Blog
          </h1>
          <p className="text-lg text-center text-gray-600 mb-8">
            A place to share your thoughts and stories.
          </p>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/create" element={<PostForm />} />
            <Route path="/edit/:id" element={<PostForm />} />
            <Route path="/post/:id" element={<PostDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
