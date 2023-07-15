"use client";

import { getAllPosts } from "@/actions/getAllPosts";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState, useTransition } from "react";
import { ClipLoader } from "react-spinners";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { timeAgo } from "@/lib/timeAgo";

export const Search = () => {
  const { theme } = useTheme();
  const { data: posts } = useSWR("posts", getAllPosts);
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [data, setData] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (debouncedQuery.length === 0) setData(null);

    if (debouncedQuery.length > 0) {
      startTransition(async () => {
        let data = posts.filter((post) =>
          post.title.toLowerCase().includes(debouncedQuery.toLowerCase())
        );

        setData(data);
      });
    }
  }, [debouncedQuery]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((isOpen) => !isOpen);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  const handleSelect = useCallback((callback) => {
    setIsOpen(false);
    callback();
  }, []);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="p-2 text-muted-foreground hover:text-foreground cursor-pointer w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <CommandDialog position="top" open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput
          placeholder="Busca un post..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty
            className={cn(isPending ? "hidden" : "py-6 text-center text-sm")}
          >
            No se han encontrado resultados.
          </CommandEmpty>
          {!isPending &&
            data?.map((post) => (
              <CommandGroup
                key={post.id}
                className="capitalize p-2"
                heading={`Publicado ${timeAgo(post?._createdAt)}`}
              >
                <CommandItem
                  onSelect={() =>
                    handleSelect(() =>
                      router.push(`/post/${post.slug.current}`)
                    )
                  }
                >
                  {post.title}
                </CommandItem>
              </CommandGroup>
            ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};
