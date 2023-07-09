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

      {/* <div className="my-8 grid gap-6 grid-cols-5">
        <Card className="col-span-3 h-64">
          <CardContent className="h-3/4 bg-muted rounded-sm animate-pulse"></CardContent>
          <CardFooter className="h-1/4 border-t"></CardFooter>
        </Card>
        <Card className="col-span-2 h-64">
          <CardFooter className="h-1/4 border-b"></CardFooter>
          <CardContent className="h-3/4 bg-muted rounded-sm animate-pulse"></CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card className="h-48">
          <CardContent className="h-3/4 bg-muted rounded-sm animate-pulse"></CardContent>
          <CardFooter className="h-1/4 border-t"></CardFooter>
        </Card>
        <Card className="h-48">
          <CardContent className="h-3/4 bg-muted rounded-sm animate-pulse"></CardContent>
          <CardFooter className="h-1/4 border-t"></CardFooter>
        </Card>
        <Card className="h-48">
          <CardContent className="h-3/4 bg-muted rounded-sm animate-pulse"></CardContent>
          <CardFooter className="h-1/4 border-t"></CardFooter>
        </Card>
      </div>

      <div className="my-8 grid gap-6 grid-cols-5">
        <Card className="col-span-3 h-64">
          <CardContent className="h-3/4 bg-muted rounded-sm animate-pulse"></CardContent>
          <CardFooter className="h-1/4 border-t"></CardFooter>
        </Card>
        <Card className="col-span-2 h-64">
          <CardFooter className="h-1/4 border-b"></CardFooter>
          <CardContent className="h-3/4 bg-muted rounded-sm animate-pulse"></CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card className="h-48">
          <CardContent className="h-3/4 bg-muted rounded-sm animate-pulse"></CardContent>
          <CardFooter className="h-1/4 border-t"></CardFooter>
        </Card>
        <Card className="h-48">
          <CardContent className="h-3/4 bg-muted rounded-sm animate-pulse"></CardContent>
          <CardFooter className="h-1/4 border-t"></CardFooter>
        </Card>
        <Card className="h-48">
          <CardContent className="h-3/4 bg-muted rounded-sm animate-pulse"></CardContent>
          <CardFooter className="h-1/4 border-t"></CardFooter>
        </Card>
      </div> */}
    </Container>
  );
};

export default Page;
