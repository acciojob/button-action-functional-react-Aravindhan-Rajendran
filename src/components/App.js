// App.js
import React, { useState } from 'react';

function App() {
  // State to manage the visibility of the paragraph
  const [isVisible, setIsVisible] = useState(false);

  // Handler function for button click
  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <div>
      {/* Button with ID 'click' */}
      <button id="click" onClick={handleClick}>
        Show Paragraph
      </button>

      {/* Conditional rendering of the paragraph */}
      {isVisible && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
        </p>
      )}
    </div>
  );
}

export default App;
