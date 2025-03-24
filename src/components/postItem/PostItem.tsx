import React from 'react';
import { Link } from 'react-router-dom';
import { IPost, IUser } from '../types/types';
import "./PostItem.css"
interface PostItemProps {
  post: IPost;
  users: IUser[];
}

const PostItem: React.FC<PostItemProps> = ({ post, users }) => {
  const user = users.find(u => u.id === post.userId);

  return (
    <li className="post-item">
      <Link to={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>Posted by: {user ? user.name : 'Unknown'}</p>
      </Link>
    </li>
  );
};

export default PostItem;