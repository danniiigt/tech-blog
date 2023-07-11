import { Button } from "@/components/ui/button";
import { useCategory } from "@/hooks/useCategory";
import React from "react";

export const EmptyBlogList = () => {
  const { setCategory } = useCategory();

  return (
    <div className="h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-semibold">¡Ooops!</h1>
      <h1 className="text-muted-foreground">
        Parece que aun no hay publicaciónes de esta categoria
      </h1>
      <Button
        className="mt-4"
        variant="outline"
        onClick={() => setCategory(null)}
      >
        Quitar filtros
      </Button>
    </div>
  );
};
