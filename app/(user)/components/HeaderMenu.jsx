"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Search } from "./Search";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import StudioButton from "./StudioButton";
import Link from "next/link";

const MenuBox = ({ icon, text, href }) => {
  return (
    <Link
      href={href || "#"}
      className="px-2 py-3 rounded flex items-center justify-between gap-1 hover:bg-muted/75 transition duration-200 text-muted-foreground hover:text-foreground"
    >
      <div className="flex items-center gap-1">
        {icon}

        <span>{text}</span>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </Link>
  );
};

export const HeaderMenu = ({ user = null }) => {
  console.log(user);

  return (
    <div className="flex items-center sm:hidden">
      <Dialog>
        <DialogTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-muted-foreground cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </DialogTrigger>
        <DialogContent
          hideCross
          className="w-full block max-w-[calc(100%-32px)] p-3 top-[15px] rounded translate-y-0 gap-0"
        >
          <div className="flex flex-col gap-2">
            {!user && (
              <>
                <MenuBox
                  href={"/login"}
                  text="Iniciar sesion"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                  }
                />

                <Separator />

                <MenuBox
                  href={"/register"}
                  text="Crear cuenta"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  }
                />
              </>
            )}

            {user && (
              <div onClick={signOut}>
                <MenuBox
                  text="Cerrar sesión"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                  }
                />
              </div>
            )}
          </div>

          <Separator className="my-2" />

          <div className="flex justify-between gap-2 mt-1">
            <Button variant="outline" className="w-full">
              <ThemeSwitcher />
            </Button>

            {user && user?.role === "admin" && (
              <Button variant="outline" className="w-full">
                <StudioButton user={user} />
              </Button>
            )}

            <Button variant="outline" className="w-full">
              <Search />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
