import React from "react";

export const BlogListHeader = ({ title, subtitle }) => {
  return (
    <header>
      <h1 className="font-semibold text-2xl">{title}</h1>
      <p className="text-muted-foreground text-sm -mt-2">{subtitle}</p>
    </header>
  );
};
