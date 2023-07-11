"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export const LinkHome = ({ children }) => {
  const router = useRouter();

  const handleGoHome = () => {
    router.refresh();
  };

  return (
    <Link href="/" onClick={handleGoHome}>
      {children}
    </Link>
  );
};
