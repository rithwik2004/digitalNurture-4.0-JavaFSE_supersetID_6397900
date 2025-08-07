
import React from 'react';

function CourseDetails({ show }) {
  return (
    <div>
      <h2>Course Section</h2>

      {/* Ternary Rendering */}
      {show ? (
        <div>
          <p>Course: Full Stack Web Development</p>
          <p>Duration: 3 Months</p>
          <p>Instructor: Mr. Developer</p>
        </div>
      ) : (
        <p>No course selected yet.</p>
      )}

      {/* Short-circuit Rendering */}
      {show && <p> You are enrolled!</p>}
    </div>
  );
}

export default CourseDetails;
