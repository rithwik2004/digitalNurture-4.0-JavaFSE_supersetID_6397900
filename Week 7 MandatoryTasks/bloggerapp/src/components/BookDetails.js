
import React from 'react';

function BookDetails({ show }) {
  if (!show) {
    return <p>No book details to show.</p>;
  }

  return (
    <div>
      <h2> Book Details</h2>
      <p>Title: React Mastery</p>
      <p>Author: John Doe</p>
      <p>Pages: 320</p>
    </div>
  );
}

export default BookDetails;
