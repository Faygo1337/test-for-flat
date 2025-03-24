import React from 'react';
import { IPost, IUser } from '../types/types';
import PostItem from '../postItem/PostItem';
import  './PostList.css'

interface PostsListProps {
  posts: IPost[];
  users: IUser[];
  isLoading: boolean;
  error: string | null;
}

const PostsList: React.FC<PostsListProps> = ({ posts, users, isLoading, error }) => {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="posts-list">
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <PostItem key={post.id} post={post} users={users} />
        ))}
      </ul>
    </div>
  );
};

export default PostsList;