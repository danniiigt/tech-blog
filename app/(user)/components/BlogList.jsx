import { PostCard } from "./PostCard";

export const BlogList = ({ posts }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
