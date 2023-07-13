import { sanityClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";

export const getAllPosts = async () => {
  const query = groq`
  *[_type == "post"] {
    ...,
    author->,
    categories[]->,
    "imageUrl": mainImage.asset->url
  } | order(_createdAt desc)`;

  const posts = await sanityClient.fetch(query);
  return posts;
};
