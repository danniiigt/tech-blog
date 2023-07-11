"use client";

import { PostCard } from "./PostCard";
import { getAllPosts } from "@/actions/getAllPosts";
import useSWR from "swr";

export const BlogList = () => {
  const { data: posts, isLoading } = useSWR("posts", getAllPosts);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-3">
      {!isLoading &&
        posts.map((post, index) => (
          <PostCard key={index} post={post} index={index} />
        ))}
    </div>
  );
};
