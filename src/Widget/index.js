import React from "react";
import "./widget.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=300&height=700&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
        width="300"
        height="700"
        style={{
          border: "none",
          overflow: "hidden",
          position: "sticky",
          top: 90,
          left: 0,
        }}
        scrolling="no"
        title="facebook"
        // frameborder="0"
        // allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default Widgets;
