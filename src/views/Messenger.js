// React
import React, { useState, useEffect } from "react";

// React Flip Move
import FlipMove from "react-flip-move";

// Components
import Message from "../components/Message";

// Material-ui
import SendIcon from "@material-ui/icons/Send";

// Firebase
import { dbService, firebaseInstance } from "../firebase";

// CSS
import "./Messenger.css";

function Messenger({ userObj }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    dbService
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageObj = {
      message: input,
      creator: userObj.displayName,
      creatorId: userObj.uid,
      timestamp: firebaseInstance.firestore.FieldValue.serverTimestamp(),
    };

    await dbService.collection("messages").add(messageObj);

    setInput("");
  };

  return (
    <>
      <div className="messenger">
        <div className="messenger__header">
          <h2>Hello, {userObj.displayName}</h2>
        </div>

        <form className="messenger__form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Message"
          />
          <SendIcon
            className="messenger__iconButton"
            type="submit"
            variant="contained"
            disabled={!input}
          />
        </form>

        <div className="messenger__messages">
          <FlipMove>
            {messages.map((message, idx) => (
              <Message key={idx} userObj={userObj} message={message} />
            ))}
          </FlipMove>
        </div>
      </div>
    </>
  );
}

export default Messenger;
