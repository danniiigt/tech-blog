import { UserMenu } from "./UserMenu";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import { LinkHome } from "./LinkHome";
import StudioButton from "./StudioButton";
import getCurrentUser from "@/actions/getCurrentUser";
import { Search } from "./Search";
import { Logo } from "@/app/(admin)/studio/components/Logo";
import { HeaderMenu } from "./HeaderMenu";

export const Header = async () => {
  const user = await getCurrentUser();

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center">
        <Logo className="mr-2 h-7 w-7 md:h-9 md:w-9" />
        <div>
          <h1 className="text-md md:text-lg">Tech Blog</h1>
          <h1 className="text-muted-foreground text-sm md:text-md -mt-1 md:-mt-2">
            El blog de la tecnología
          </h1>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-x-2 text-muted-foreground">
        <Search />
        <LinkHome />
        <StudioButton user={user} />
        <ThemeSwitcher />
        <UserMenu user={user} />
      </div>
      <HeaderMenu user={user} />
    </header>
  );
};
