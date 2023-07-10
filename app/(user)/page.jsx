import { Container } from "@/components/shared/Container";
import { Categories } from "./components/Categories";
import { BlogList } from "./components/BlogList";
import { getAllPosts } from "@/actions/getAllPosts";

const Page = async () => {
  const posts = await getAllPosts();

  return (
    <Container>
      <div className="my-6">
        <Categories />
      </div>

      <div className="my-8">
        <BlogList posts={posts} />
      </div>
    </Container>
  );
};

export default Page;
