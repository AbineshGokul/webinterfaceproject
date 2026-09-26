import React, { useState } from "react";

function App() {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >
      <button
        onClick={toggleInfo}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {showInfo ? "Hide Information" : "Show Information"}
      </button>

      {showInfo && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "2px solid #333",
            borderRadius: "10px",
            width: "300px",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#f4f4f4",
          }}
        >
          <h2>Information Box</h2>
          <p>Name: Abinesh</p>
          <p>Department: CSE</p>
          <p>College: Prince Dr. K. Vasudevan College</p>
        </div>
      )}
    </div>
  );
}

export default App;