import React from "react";
import Story from "./Story";
import "./storyReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        storyImage="https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=800"
        profileImage="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        title="Hybee"
      />
      <Story
        storyImage="https://images.pexels.com/photos/3737018/pexels-photo-3737018.jpeg?auto=compress&cs=tinysrgb&w=800"
        profileImage="https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        title="Demola"
      />
      <Story
        storyImage="https://images.pexels.com/photos/3799324/pexels-photo-3799324.jpeg?auto=compress&cs=tinysrgb&w=800"
        profileImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        title="Oyindamola"
      />
      <Story
        storyImage="https://images.pexels.com/photos/4819296/pexels-photo-4819296.jpeg?auto=compress&cs=tinysrgb&w=800"
        profileImage="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        title="Nas"
      />
      {/* <Story
        storyImage="https://images.pexels.com/photos/6045281/pexels-photo-6045281.jpeg?auto=compress&cs=tinysrgb&w=800"
        profileImage="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        title="Oyindamola"
      /> */}
    </div>
  );
}

export default StoryReel;
