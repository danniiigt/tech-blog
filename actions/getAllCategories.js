import { sanityClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";

export const getAllCategories = async () => {
  const query = groq`
    *[_type == "category"] {
    _id,
    title,
    _createdAt
  } | order(_createdAt asc)`;

  const categories = await sanityClient.fetch(query);

  return categories;
};
