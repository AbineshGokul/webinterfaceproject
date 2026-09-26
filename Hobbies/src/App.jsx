import React from "react";
import HobbyCard from "./HobbyCard";
import "./App.css";

function App() {
  return (
    <div className="app">

      <h1>My Hobbies</h1>

      <div className="hobby-container">

        <HobbyCard
          image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          name="Coding"
          description="I enjoy coding and solving programming problems using Java, Python and JavaScript."
        />

        <HobbyCard
          image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
          name="AI & Deep Learning"
          description="I enjoy learning Artificial Intelligence and building Deep Learning projects."
        />

        <HobbyCard
          image="https://images.unsplash.com/photo-1547658719-da2b51169166"
          name="Web Development"
          description="I enjoy creating websites using HTML, CSS, JavaScript and React."
        />

      </div>

    </div>
  );
}

export default App;