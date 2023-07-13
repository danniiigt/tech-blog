"use client";

import { PostCard } from "./PostCard";
import { getAllPosts } from "@/actions/getAllPosts";
import { useCategory } from "@/hooks/useCategory";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { EmptyBlogList } from "./EmptyBlogList";

export const BlogList = () => {
  const { category } = useCategory();
  const { data: posts, isLoading } = useSWR("posts", getAllPosts);
  const [postsByCategory, setPostsByCategory] = useState(posts);

  const getPostsByCategory = (categoryId) => {
    if (!isLoading) {
      const postsByCategory = posts.filter((post) => {
        return post.categories.find((category) => category._id === categoryId);
      });

      return postsByCategory;
    }
  };

  useEffect(() => {
    if (category) {
      const postsByCategory = getPostsByCategory(category.id);
      setPostsByCategory(postsByCategory);
    } else {
      setPostsByCategory(posts);
    }
  }, [category, posts]);

  return (
    <>
      {!isLoading && posts.length === 0 && <EmptyBlogList />}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-3">
        {!isLoading &&
          category &&
          postsByCategory.map((post, index) => (
            <PostCard key={index} post={post} index={index} />
          ))}

        {!isLoading &&
          !category &&
          postsByCategory
            ?.slice(3, postsByCategory.length)
            .map((post, index) => (
              <PostCard key={index} post={post} index={index} />
            ))}
      </div>
    </>
  );
};
