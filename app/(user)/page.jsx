import { Container } from "@/components/shared/Container";
import { Categories } from "./components/Categories";
import { BlogList } from "./components/BlogList";

const Page = () => {
  return (
    <Container>
      <div className="my-6">
        <Categories />
      </div>

      <div className="my-8">
        <BlogList />
      </div>
    </Container>
  );
};

export default Page;
