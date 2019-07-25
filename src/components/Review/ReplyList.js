import React, { useState } from "react";
import ReplyItem from "./ReplyItem";
import ReplyForm from "./ReplyForm";

const ReplyList = props => {
  const [showReplyForm, toggleForm] = useState(false);
  const { messageId, replies } = props;

  return (
    <div className="reply-list">
      <button
        className="reply-button"
        onClick={() => toggleForm(!showReplyForm)}
      >
        {showReplyForm ? "Close" : "Reply"}
      </button>
      {showReplyForm && (
        <ReplyForm messageId={messageId} toggleForm={toggleForm} />
      )}
      {replies.length > 0 && <span className="reply-list-title">Replies</span>}
      {replies.map(item => {
        return <ReplyItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ReplyList;
