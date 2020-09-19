// React
import React, { forwardRef } from "react";

// CSS
import "./Message.css";

const Message = forwardRef(({ userObj, message }, ref) => {
  const isSender = userObj.displayName === message.creator;

  return (
    <>
      <div className="message"></div>
    </>
  );
});

export default Message;
