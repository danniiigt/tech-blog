import { sanityClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";

export const getPostsByCategory = async (category) => {
  const query = groq`
  *[_type == "post" && references($category)] {
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)`;

  const posts = await sanityClient.fetch(query, { category });
  return posts;
};
