import React from "react";
import { IComment } from "../types/types";
import "./CommentItem.css";
interface CommentItemProps {
  comment: IComment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  return (
    <li className="comment-item">
      <h3>{comment.name}</h3>
      <p className="body">{comment.body}</p>
      <p className="email">
        <em>By: {comment.email}</em>
      </p>
    </li>
  );
};

export default CommentItem;
