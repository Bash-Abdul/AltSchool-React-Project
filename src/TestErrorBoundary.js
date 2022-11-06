import React from 'react'


const TestErrorBoundary = ({error}) => {
  return (
    <div className="container">
        <p>An error occurred:</p>
        <pre>{error.message}</pre>
    </div>
  );
}

export default TestErrorBoundary