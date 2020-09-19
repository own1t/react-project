// React
import React, { useEffect, useState } from "react";

// CSS
import "./Feed.css";

// Components
import PostBox from "../components/PostBox";

function Feed({ userObj }) {
  const [posts, newPosts] = useState([]);

  useEffect(() => {
    //
  }, []);

  return (
    <>
      <div className="feed">
        <PostBox userObj={userObj} />
      </div>
    </>
  );
}

export default Feed;
