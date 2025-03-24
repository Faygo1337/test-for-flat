import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { IPost, IUser, IComment } from '../types/types';
import CommentItem from '../commentItem/CommentItem';
import './PostDetails.css';
interface PostDetailsProps {
  posts: IPost[];
  comments: IComment[];
  users: IUser[];
  isLoading: boolean;
  error: string | null;
}

const PostDetails: React.FC<PostDetailsProps> = ({ posts, comments, users, isLoading, error }) => {
  const { postId } = useParams<{ postId: string }>();
  const post = posts.find(p => p.id === Number(postId));
  const user = post ? users.find(u => u.id === post.userId) : null;
  const postComments = comments.filter(c => c.postId === Number(postId));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="post-details">
      <h1 className="author">{post.title}</h1>
      <p>Posted by: {user ? user.name : 'Unknown'}</p>
      <p className="body">{post.body}</p>
      <h2>Comments</h2>
      {postComments.length > 0 ? (
        <ul>
          {postComments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </ul>
      ) : (
        <p className="no-comments">No comments</p>
      )}
      <Link to="/" className="back-link">Back to Posts</Link>
    </div>
  );
};

export default PostDetails;