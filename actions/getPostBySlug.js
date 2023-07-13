import { sanityClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";

export const getPostBySlug = async (slug) => {
  const query = groq`
  *[_type == "post" && slug.current == $slug] {
    ...,
    author->,
    categories[]->,
    "imageUrl": mainImage.asset->url,
    color
  } | order(_createdAt desc)`;

  const post = await sanityClient.fetch(query, { slug });
  return post[0];
};
