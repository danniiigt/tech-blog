import React from "react";
import { PostCard } from "./PostCard";

export const BlogList = ({ posts }) => {
  //   console.log(posts);

  return (
    <div className="grid lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
