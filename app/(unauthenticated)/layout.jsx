import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Header from "./components/Header";

const UnAuthLayout = async ({ children }) => {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Header />
      {children}
    </div>
  );
};

export default UnAuthLayout;
