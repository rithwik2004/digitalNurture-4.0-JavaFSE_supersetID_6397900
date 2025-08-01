import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails name="React Basics" trainer="Alice" status="ongoing" />
      <CohortDetails name="Node Advanced" trainer="Bob" status="completed" />
    </div>
  );
}

export default App;
