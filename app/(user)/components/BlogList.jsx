"use client";

import { PostCard } from "./PostCard";
import { getAllPosts } from "@/actions/getAllPosts";
import { getPostsByCategory } from "@/actions/getPostsByCategory";
import { useCategory } from "@/hooks/useCategory";
import { useEffect } from "react";
import useSWR, { mutate } from "swr";
import { EmptyBlogList } from "./EmptyBlogList";
import { BlogListHeader } from "./BlogListHeader";
import post from "@/schemas/post";

export const BlogList = () => {
  const { category } = useCategory();

  const getPosts = () => {
    if (category) return getPostsByCategory(category.id);
    return getAllPosts();
  };

  const { data: posts, isLoading } = useSWR(
    category ? "postsByCategory" : "posts",
    getPosts
  );

  useEffect(() => {
    mutate("postsByCategory");
  }, [category]);

  return (
    <>
      {!isLoading && posts.length === 0 && <EmptyBlogList />}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-3">
        {!isLoading &&
          category &&
          posts.map((post, index) => (
            <PostCard key={index} post={post} index={index} />
          ))}

        {!isLoading &&
          posts
            .slice(3, posts.length)
            .map((post, index) => (
              <PostCard key={index} post={post} index={index} />
            ))}
      </div>
    </>
  );
};
