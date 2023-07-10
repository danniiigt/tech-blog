import { sanityClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";

export const getAllPosts = async () => {
  const query = groq`
  *[_type == "post"] {
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)`;

  const posts = await sanityClient.fetch(query, {
    cache: "no-store",
  });
  return posts;
};
