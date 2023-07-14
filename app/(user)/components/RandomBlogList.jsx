"use client";

import { getAllPosts } from "@/actions/getAllPosts";
import { PostCard } from "./PostCard";
import useSWR from "swr";

export const RandomBlogList = ({ excludeId }) => {
  const { data: posts, isLoading } = useSWR("posts", getAllPosts);

  const getRandomPosts = () => {
    if (!isLoading) {
      const randomPosts = posts
        .filter((post) => {
          return post._id !== excludeId;
        })
        .sort(() => Math.random() - Math.random())
        .slice(0, 3);

      return randomPosts;
    }
  };

  return (
    <div className="mt-8">
      <h1 className="text-lg mb-4">Otros posts que quizás te interesen</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-3">
        {getRandomPosts()?.map((post, index) => (
          <PostCard key={index} post={post} index={index} variant="outlined" />
        ))}
      </div>
    </div>
  );
};
