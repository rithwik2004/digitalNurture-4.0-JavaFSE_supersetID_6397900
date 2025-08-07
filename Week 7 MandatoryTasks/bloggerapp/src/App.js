
import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [showBook, setShowBook] = useState(true);
  const [showBlog, setShowBlog] = useState(false);
  const [showCourse, setShowCourse] = useState(false);

  return (
    <div className="App">
      <h1>Blogger App</h1>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setShowBook((prev) => !prev)}>Toggle Book</button>
        <button onClick={() => setShowBlog((prev) => !prev)}>Toggle Blog</button>
        <button onClick={() => setShowCourse((prev) => !prev)}>Toggle Course</button>
      </div>

      <BookDetails show={showBook} />
      <BlogDetails show={showBlog} />
      <CourseDetails show={showCourse} />
    </div>
  );
}

export default App;
