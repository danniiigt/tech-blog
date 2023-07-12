"use client";

import { getAllCategories } from "@/actions/getAllCategories";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCategory } from "@/hooks/useCategory";
import { useEffect } from "react";
import useSWR from "swr";

export const Categories = () => {
  const { category, setCategory } = useCategory();
  const { data: categories, isLoading } = useSWR(
    "categories",
    getAllCategories
  );

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-hidden");
    let isScrolling = false;
    let startX = 0;
    let scrollLeft = 0;

    scrollContainer.addEventListener("mousedown", (e) => {
      isScrolling = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      scrollContainer.classList.add("cursor-grabbing");
    });

    scrollContainer.addEventListener("mouseleave", () => {
      isScrolling = false;
      scrollContainer.classList.remove("cursor-grabbing");
    });

    scrollContainer.addEventListener("mouseup", () => {
      isScrolling = false;
      scrollContainer.classList.remove("cursor-grabbing");
    });

    scrollContainer.addEventListener("mousemove", (e) => {
      if (!isScrolling) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = x - startX;
      scrollContainer.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <Tabs
      defaultValue="todo"
      value={category?.id ? category.id : "todo"}
      className="tabs-container"
    >
      <TabsList className="w-full block scroll-hidden justify-between">
        <div className="scroll-content flex gap-1">
          {!isLoading && (
            <TabsTrigger
              onClick={() => {
                setCategory(null);
              }}
              value="todo"
              className="
                hover:bg-background/60
                transition
                duration-200
                "
            >
              Todo
            </TabsTrigger>
          )}
          {!isLoading &&
            categories.map((category, index) => (
              <TabsTrigger
                key={index}
                onClick={() => {
                  setCategory({
                    id: category._id,
                    title: category.title,
                  });
                }}
                value={category._id}
                className="
                hover:bg-background/60
                transition
                duration-200
              "
              >
                {category.title}
              </TabsTrigger>
            ))}
        </div>
      </TabsList>
    </Tabs>
  );
};
