import { Header } from "./components/Header";
import { Container } from "@/components/shared/Container";
import "animate.css";

export default function UserLayout({ children }) {
  return (
    <div className="p-4 lg:p-8">
      <Container>
        <Header />
      </Container>
      {children}
    </div>
  );
}
