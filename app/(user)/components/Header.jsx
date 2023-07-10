import { UserMenu } from "./UserMenu";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import { HeaderHome } from "./HeaderHome";
import StudioButton from "./StudioButton";
import getCurrentUser from "@/actions/getCurrentUser";
import { LinkHome } from "@/components/shared/LinkHome";

export const Header = async () => {
  const user = await getCurrentUser();

  return (
    <header className="flex items-center justify-between">
      <div>
        <LinkHome>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-5 w-5"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
            </svg>
            <h1 className="text-lg">Tech Blog</h1>
          </div>
        </LinkHome>
        <h1 className="text-muted-foreground">El blog de la tecnología</h1>
      </div>

      <div className="flex items-center gap-x-2 text-muted-foreground">
        <HeaderHome />
        <StudioButton user={user} />
        <ThemeSwitcher />
        <UserMenu user={user} />
      </div>
    </header>
  );
};
