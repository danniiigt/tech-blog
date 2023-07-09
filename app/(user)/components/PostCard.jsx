"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "@/lib/sanity.client";
import Link from "next/link";
import Image from "next/image";
import { timeAgo } from "@/lib/timeAgo";

export const PostCard = ({ post }) => {
  const imageProps = useNextSanityImage(sanityClient, post.mainImage);

  return (
    <Link href={`/post/${post.slug.current}`}>
      <Card
        className="
            group 
            hover:border-muted-foreground/50 
            transition 
            duration-200
            border-none
        "
      >
        <CardContent
          className="
            p-0 
            overflow-hidden 
            border 
            rounded-t-md
            group-hover:border-muted-foreground/50
            transition-all
            duration-300
          "
        >
          <Image
            src={imageProps.src}
            alt={post.title}
            width={imageProps.width}
            height={imageProps.height}
            className="
                w-full 
                group-hover:scale-110
                transition-all
                duration-200
                object-cover
                object-center
                h-[190px]
            "
          />
        </CardContent>
        <CardFooter
          className="
            px-4 
            py-3 
            flex 
            justify-between 
            items-center 
            gap-4 
            border-l
            border-r
            border-b 
            rounded-b-md
            group-hover:border-muted-foreground/50
            transition-all
            duration-300
            bg-muted/20
          "
        >
          <h1 className="text-muted-foreground truncate">{post.title}</h1>
          <div className="flex flex-col">
            <h1 className="whitespace-nowrap text-xs text-muted-foreground">
              {post.author.name}
            </h1>
            <h1 className="whitespace-nowrap text-xs text-muted-foreground/50">
              {timeAgo(post._createdAt)}
            </h1>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
