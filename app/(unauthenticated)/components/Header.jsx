import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-[575px] px-6">
      <Link
        href="/"
        className="flex items-center gap-2 hover:text-primary group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
        <h1 className="text-muted-foreground group-hover:text-primary">
          Volver al inicio
        </h1>
      </Link>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
