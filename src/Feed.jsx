import React from "react";
import Post from "./Post";

function Feed({ posts }) {
  return (
    <>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
}

export default Feed;
