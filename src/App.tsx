import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsList from "./components/postList/PostList";
import PostDetails from "./components/postDetails/PostDetails";
import Axios from "axios";
import { IPost, IUser, IComment } from "./components/types/types";
import "./App.css";

const App: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, usersRes, commentsRes] = await Promise.all([
          Axios.get("https://jsonplaceholder.typicode.com/posts"),
          Axios.get("https://jsonplaceholder.typicode.com/users"),
          Axios.get("https://jsonplaceholder.typicode.com/comments"),
        ]);
        setPosts(postsRes.data);
        setUsers(usersRes.data);
        setComments(commentsRes.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Router basename="/test-for-flat">
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <PostsList
                posts={posts}
                users={users}
                isLoading={isLoading}
                error={error}
              />
            }
          />
          <Route
            path="/posts/:postId"
            element={
              <PostDetails
                posts={posts}
                comments={comments}
                users={users}
                isLoading={isLoading}
                error={error}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
