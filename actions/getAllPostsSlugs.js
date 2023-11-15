import { sanityClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";

export const getAllPostsSlugs = async () => {
  const query = groq`
    *[_type == "post"] {
        slug
    }`;

  const posts = await sanityClient.fetch(query);
  return posts;
};
