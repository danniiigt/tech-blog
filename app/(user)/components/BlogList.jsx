"use client";

import { PostCard } from "./PostCard";
import { getAllPosts } from "@/actions/getAllPosts";
import { getPostsByCategory } from "@/actions/getPostsByCategory";
import { useCategory } from "@/hooks/useCategory";
import { useEffect } from "react";
import useSWR, { mutate } from "swr";

export const BlogList = () => {
  const { category } = useCategory();

  const getPosts = () => {
    if (category) return getPostsByCategory(category.id);
    return getAllPosts();
  };

  useEffect(() => {
    mutate("posts");
  }, [category]);

  const { data: posts, isLoading } = useSWR("posts", getPosts);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-3">
      {!isLoading &&
        posts.map((post, index) => (
          <PostCard key={index} post={post} index={index} />
        ))}
    </div>
  );
};
