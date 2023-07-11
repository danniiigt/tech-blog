import { Container } from "@/components/shared/Container";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  const skeletons = [];

  for (let i = 0; i < 22; i++) {
    const randomWidth = Math.floor(Math.random() * 21) + 90; // Genera un número aleatorio entre 80 y 100
    skeletons.push(
      <Skeleton
        key={i}
        className="h-[14px]"
        style={{
          width: `${randomWidth}%`,
        }}
      />
    );
  }

  return (
    <Container>
      <div className="my-8">
        <div className="w-full h-[390px] rounded-lg bg-zinc-900 animate-pulse"></div>

        <div className="mt-8 flex items-center justify-between">
          <div>
            <Skeleton className="h-[22px] w-[380px]" />

            <div className="flex items-center mt-2 gap-2">
              <Skeleton className="h-[12px] w-[86px]" />
              <Skeleton className="h-[12px] w-[80px]" />
              <Skeleton className="h-[12px] w-[78px]" />
              <Skeleton className="h-[12px] w-[80px]" />
            </div>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <Skeleton className="h-[24px] w-[24px] rounded-full" />
            <Skeleton className="h-[24px] w-[24px] rounded-full" />
            <Skeleton className="h-[24px] w-[24px] rounded-full" />
          </div>
        </div>

        <div className="mt-8 space-y-4 w-full md:w-3/4 lg:2/3">{skeletons}</div>
      </div>
    </Container>
  );
};

export default Loading;
