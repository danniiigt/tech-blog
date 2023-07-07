import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen w-full flex flex-col gap-4 items-center justify-center">
      <h1 className="text-5xl">Tech Blog</h1>
      <Link
        href="/studio"
        className="bg-green-700 hover:bg-green-800 active:bg-green-600 text-white py-2 px-4 rounded"
      >
        ir al studio
      </Link>
    </div>
  );
};

export default Page;
