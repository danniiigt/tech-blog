"use client";

import { useTheme } from "next-themes";
import { Toaster } from "react-hot-toast";

export const ToasterProvider = () => {
  const { theme } = useTheme();

  return (
    <Toaster
      //change color
      toastOptions={{
        style: {
          background: theme === "dark" ? "#18181b" : "#FFFF",
          color: theme === "dark" ? "#FFFF" : "#18181b",
          width: "100%",
        },
      }}
    />
  );
};
