import React, { useState } from "react";
import "./messageSender.css";
import { FaVideo, FaRegSmile } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { useStateValue } from "../DataContext/StateProvider";
import db from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const collectionRef = collection(db, "post");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input !== null) {
    }
    try {
      const postRef = doc(collectionRef, `${new Date().getTime()}`);
      const response = await setDoc(postRef, {
        message: input,
        timestamp: new Date(),
        profilePic: user?.photoURL,
        username: user?.displayName,
        image: imageUrl,
      });

      // You can also use addDoc to post to the database
      // await addDoc(collection(firestoreDB, "post"), {
      //   message: input,
      //   timestamp: serverTimestamp,
      //   profilePic: user?.photoURL,
      //   username: user?.displayName,
      //   image: imageUrl,
      // });
    } catch (error) {
      console.log(error);
    }

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <img
          // src="https://icon-library.com/images/icon-batman/icon-batman-20.jpg"
          src={user?.photoURL}
          alt="profile"
        />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's on your mind?"
            className="messageSender__input"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image Url Option"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="massageSender__option">
          <FaVideo
            style={{ color: "crimson", fontSize: "25px" }}
            className="icon"
          />
          <h4>Live Video</h4>
        </div>
        <div className="massageSender__option">
          <IoMdPhotos
            style={{ color: "#2e81f4", fontSize: "25px" }}
            className="icon"
          />
          <h4>Photos</h4>
        </div>
        <div className="massageSender__option">
          <FaRegSmile
            style={{ color: "gold", fontSize: "25px" }}
            className="icon"
          />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
