import React, { useState } from "react";
import ReplyList from "../Review/ReplyList";

const MessageItem = props => {
  const { id, text, replies } = props;
  const [likes, setLike] = useState(0);
  const [dislikes, setDislike] = useState(0);

  return (
    <div className="message">
      <div className="message-content">
        <span>user: {[...id].slice(15)}</span>
        <div className="message-text">
          <h2>{text}</h2>

          <button onClick={() => setLike(likes + 1)}>
            <span role="img" aria-label="emoji">
              &#x1F497;
            </span>
            {likes}
          </button>

          <button onClick={() => setDislike(dislikes + 1)}>
            <span role="img" aria-label="emoji">
              &#x1F494;
            </span>
            {dislikes}
          </button>
        </div>
      </div>
      <ReplyList messageId={id} replies={replies} />
    </div>
  );
};

export default MessageItem;
