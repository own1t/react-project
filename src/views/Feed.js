// React
import React, { useEffect, useState } from "react";

// CSS
import "./Feed.css";

function Feed({ userObj }) {
  const [posts, newPosts] = useState([]);

  useEffect(() => {
    //
  }, []);

  return (
    <>
      <div className="feed"></div>
    </>
  );
}

export default Feed;
