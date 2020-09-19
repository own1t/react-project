// React
import React from "react";

// CSS
import "./PostBox.css";

// Material-ui
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

function PostBox() {
  return (
    <>
      <div className="postBox">
        <form>
          <input type="text" placeholder="What's on your mind?" />
          <ArrowUpwardIcon type="submit">Post</ArrowUpwardIcon>
        </form>
      </div>
    </>
  );
}

export default PostBox;
