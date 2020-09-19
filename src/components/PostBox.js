// React
import React, { useState } from "react";

// CSS
import "./PostBox.css";

// Firebase
import { dbService, firebaseInstance, storageService } from "../firebase";

// uuid
import { v4 as uuid } from "uuid";

// Material-ui
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Button } from "@material-ui/core";

function PostBox({ userObj }) {
  const [post, setPost] = useState("");
  const [attachment, setAttachment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let attachmentUrl = "";

    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuid()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }

    const postObj = {
      text: post,
      creatorId: userObj.uid,
      creator: userObj.displayName,
      timestamp: firebaseInstance.firestore.FieldValue.serverTimestamp(),
      attachmentUrl,
    };

    await dbService.collection("posts").add(postObj);

    setPost("");
    setAttachment("");
  };

  const handleFileChange = (e) => {
    const {
      target: { files },
    } = e;

    const selectedFile = files[0];
    const reader = new FileReader();

    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };

    reader.readAsDataURL(selectedFile);
  };

  const handleFileClear = () => setAttachment("");

  return (
    <>
      <div className="postBox">
        <form onSubmit={handleSubmit}>
          <div className="postBox__input">
            <input
              type="text"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              maxLength={120}
              placeholder="What's on your mind?"
            />
            <ArrowUpwardIcon type="submit">Post</ArrowUpwardIcon>
          </div>

          <label htmlFor="attachment" className="postBox__fileInput">
            <span>Add Photo</span>
          </label>
          <input
            id="attachment"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ opacity: 0 }}
          />

          {attachment && (
            <div className="postBox__attachment">
              <img
                src={attachment}
                style={{ backgroundImage: attachment }}
                alt=""
              />
              <div className="postBox__attachmentClear">
                <Button onClick={handleFileClear}>Remove</Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default PostBox;
