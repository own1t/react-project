// React
import React, { useEffect, useState } from "react";

// Components
import PostBox from "../components/PostBox";
import Post from "../components/Post";

// Firebase
import { dbService } from "../firebase";

// CSS
import "./Feed.css";

function Feed({ userObj }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dbService
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const postArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postArray);
      });
  }, []);

  return (
    <>
      <div className="feed">
        <PostBox userObj={userObj} />

        <div className="feed__posts">
          {posts.map((post, idx) => (
            <Post
              key={idx}
              postObj={post}
              isOwner={post.creatorId === userObj.uid}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Feed;
