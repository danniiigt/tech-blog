"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { timeAgo } from "@/lib/timeAgo";
import { BlogReadTime } from "./BlogReadTime";
import Link from "next/link";
import Image from "next/image";

export const PostCard = ({ post, variant = "contained" }) => {
  const readingTime = (text) => {
    const wordsPerMinute = 150;
    const numberOfWords = text?.split(/\s/g).length;
    return Math.ceil(numberOfWords / wordsPerMinute);
  };

  const bodyText = post?.body
    ?.map((block) => block.children[0].text)
    .join(",")
    .replaceAll(",", "");

  const estimatedTime = readingTime(bodyText);

  return (
    <Link
      href={`/post/${post?.slug?.current}`}
      className="animate__animated animate__fadeIn w-full"
    >
      <Card
        className="
          group 
          hover:border-muted-foreground/50 
          transition 
          duration-200
          border-none
          relative
          shadow-none
        "
      >
        <CardContent
          className={`
            p-0 
            overflow-hidden 
            border 
            group-hover:border-muted-foreground/50
            transition-all
            duration-300
            ${variant === "outlined" ? "rounded-md" : "rounded-t-md"}
          `}
        >
          <Image
            src={post?.imageUrl}
            alt={post?.title}
            width={400}
            height={240}
            className="
              w-full
              group-hover:scale-110
              transition-all
              duration-200
              object-cover
              object-center
              h-[210px]
              md:h-[190px]
            "
          />

          <BlogReadTime estimatedTime={estimatedTime} />
        </CardContent>
        <CardFooter
          className={`
            py-3 
            flex 
            justify-between 
            items-center 
            gap-4 
            transition-all
            duration-300
            text-muted-foreground
            ${
              variant === "outlined"
                ? "px-0 group-hover:text-foreground"
                : "border-l border-r border-b rounded-b-md group-hover:border-muted-foreground/50 bg-muted/20 px-4"
            }
          `}
        >
          <h1 className="sm:truncate">{post?.title}</h1>

          {variant === "outlined" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          ) : (
            <div className="flex w-fit flex-col">
              <h1 className="whitespace-nowrap text-right text-xs text-muted-foreground">
                {post?.author?.name}
              </h1>
              <h1 className="whitespace-nowrap text-right text-xs text-muted-foreground/50">
                {timeAgo(post?._createdAt)}
              </h1>
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};
