
import React from 'react';

function BlogDetails({ show }) {
  let content;

  if (show) {
    content = (
      <div>
        <h2>Blog Details</h2>
        <p>Title: Learning React Conditional Rendering</p>
        <p>Author: Jane Smith</p>
        <p>Date: August 7, 2025</p>
      </div>
    );
  } else {
    content = <p>Blog section is hidden.</p>;
  }

  return content;
}

export default BlogDetails;
