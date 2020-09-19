// React
import React, { forwardRef, useRef, useEffect } from "react";

// Material-ui
import { Card, CardContent, Typography } from "@material-ui/core";

// CSS
import "./Message.css";

const Message = forwardRef(({ userObj, message }, ref) => {
  const isSender = userObj.displayName === message.creator;

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [message]);

  return (
    <>
      <div className={`message ${isSender && "message__sender"}`} ref={ref}>
        <Card
          className={isSender ? "message__sendCard" : "message__receiveCard"}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              {!isSender && `${message.creator}: `}
              {message.message}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div ref={messagesEndRef} />
    </>
  );
});

export default Message;
