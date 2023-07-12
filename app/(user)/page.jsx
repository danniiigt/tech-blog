import { Container } from "@/components/shared/Container";
import { Categories } from "./components/Categories";
import { BlogList } from "./components/BlogList";
import { BlogCarousel } from "./components/BlogCarousel";

const Page = () => {
  return (
    <Container>
      <div className="my-6">
        <Categories />
      </div>

      <div className="my-4">
        <BlogCarousel />

        <BlogList />
      </div>
    </Container>
  );
};

export default Page;
