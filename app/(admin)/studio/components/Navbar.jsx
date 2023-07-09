import Link from "next/link";
import React from "react";

export const Navbar = (props) => {
  return (
    <div>
      <div className="py-[15px] px-[20px] bg-primary/75 text-white">
        <div className="w-full flex items-center justify-between">
          <Link
            href="/"
            className="flex w-1/3 text-neutral-200 items-center gap-4 hover:text-white"
          >
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
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>

            <h1>Volver a inicio</h1>
          </Link>

          <div className="w-1/2">
            <h1 className="text-center font-semibold uppercase">
              Estudio de edición
            </h1>
          </div>

          <div className="w-1/3">
            <h1 className="text-right text-neutral-200">Tech Blog</h1>
          </div>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};
