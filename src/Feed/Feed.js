import { onValue } from "firebase/database";
import React, { useEffect, useState } from "react";
import MessageSender from "../MessageSender";
import Post from "../Post";
import "./feed.css";
import StoryReel from "./StoryReel";
import db from "../firebase";

import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

function Feed() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "post"), orderBy("timestamp", "desc"));

    const unSub = onSnapshot(q, (querySnapshot) => {
      let postData = [];

      querySnapshot.forEach((post) => {
        postData.push({ id: post.id, ...post.data() });
      });
      setPost(postData);
    });

    return () => unSub();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {post.map((post) => {
        const { profilePic, image, timestamp, message, username } = post;
        return (
          <React.Fragment key={timestamp}>
            <Post
              profilePic={profilePic}
              image={image}
              timestamp={timestamp}
              message={message}
              username={username}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Feed;
