import { useState } from "react";
import "./task6.css";

function App() {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="container">
      <button onClick={toggleInfo}>
        {showInfo ? "Hide Information" : "Show Information"}
      </button>

      {showInfo && (
        <div className="info-box">
          <h2>Student Information</h2>
          <p><strong>Name:</strong> Abinesh G</p>
          <p><strong>Department:</strong> CSE</p>
          <p><strong>College:</strong> Prince Dr. K. Vasudevan College of Engineering and Technology</p>
          <p><strong>Year:</strong> II Year</p>
        </div>
      )}
    </div>
  );
}

export default App;