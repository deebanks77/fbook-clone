import React from "react";
import "./post.css";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";

function Post({ profilePic, image, username, timestamp, message }) {
  const date = new Date(
    timestamp?.seconds * 1000 + timestamp?.nanoseconds / 1000000
  );

  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  // console.log(formattedDate); // Output: "27/4/2023 13:20:53"

  console.log(timestamp);
  return (
    <div className="post">
      <div className="post__top">
        <img src={profilePic} alt="avater" className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{formattedDate}</p>
        </div>
      </div>

      <div className="post__bottom">{message}</div>

      {image && (
        <div className="post__image">
          <img src={image} alt="post image" />
        </div>
      )}

      <div className="post__options">
        <div className="post__option">
          <BsHandThumbsUpFill />
          <p>Like</p>
        </div>
        <div className="post__option">
          <BiComment />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <TbShare3 />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
