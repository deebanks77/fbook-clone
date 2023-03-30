import React from "react";
import "./story.css";

function Story({ storyImage, profileImage, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${storyImage})` }}>
      <img src={profileImage} alt="profile" className="story__avater" />

      <h4>{title} </h4>
    </div>
  );
}

export default Story;
