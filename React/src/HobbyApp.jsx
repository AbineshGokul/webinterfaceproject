import React from "react";
import HobbyCard from "./HobbyCard";
import "./HobbyStyle.css";

function HobbyApp() {
  return (
    <div className="container">

      <h1>My Hobbies</h1>

      <div className="hobby-container">

        <HobbyCard
          image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          name="Coding"
          description="I enjoy coding and solving programming problems using Java, Python and JavaScript."
        />

        <HobbyCard
          image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
          name="Artificial Intelligence"
          description="I enjoy learning Artificial Intelligence and Deep Learning concepts and building AI projects."
        />

        <HobbyCard
          image="https://images.unsplash.com/photo-1547658719-da2b51169166"
          name="Web Development"
          description="I enjoy creating websites and learning HTML, CSS, JavaScript and React."
        />

      </div>

    </div>
  );
}

export default HobbyApp;