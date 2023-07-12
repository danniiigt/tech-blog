"use client";

import { getAllPosts } from "@/actions/getAllPosts";
import { useCategory } from "@/hooks/useCategory";
import { sanityClient } from "@/lib/sanity.client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";

export const BlogCarousel = () => {
  const { data: posts, isLoading } = useSWR("posts", getAllPosts);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);
  const [width, setWidth] = useState(0);
  const { category } = useCategory();

  const imageProps = useNextSanityImage(
    sanityClient,
    posts?.[imagenSeleccionada]?.mainImage
  );

  useEffect(() => {
    const interval = setInterval(() => {
      let startTimestamp = null;
      const duration = 10000;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        const progressWidth = Math.min((progress / duration) * 100, 100);
        setWidth(progressWidth);

        if (progress < duration) {
          requestAnimationFrame(step);
        } else {
          setImagenSeleccionada((prev) => {
            if (prev === 3) return 0;
            return prev + 1;
          });
        }
      };

      requestAnimationFrame(step);
    }, 10000);

    return () => {
      clearInterval(interval);
      setWidth(0);
    };
  }, [imagenSeleccionada]);

  if (category) return null;

  return (
    <div className="hidden sm:block relative w-full h-[400px] drop-shadow-xl mb-4">
      {!isLoading && (
        <Link href={`/post/${posts?.[imagenSeleccionada].slug?.current}`}>
          <Image
            src={imageProps}
            alt="imagen"
            width={1024}
            height={400}
            className="w-full h-full rounded-lg object-cover object-center animate__animated animate__fadeIn"
          />
        </Link>
      )}

      <div className="absolute bottom-0 w-full bg-background/30 backdrop-blur-lg rounded drop-shadow-lg p-5 flex justify-between items-center">
        <h1 className="text-md font-semibold">
          {posts?.[imagenSeleccionada].title}
        </h1>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>

          <h1>
            {imagenSeleccionada + 1}/{posts?.length}
          </h1>

          <div className="flex items-center">
            <svg
              onClick={() => {
                if (imagenSeleccionada === 0) return;
                setImagenSeleccionada(imagenSeleccionada - 1);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>

            <svg
              onClick={() => {
                if (imagenSeleccionada === posts?.length - 1) return;
                setImagenSeleccionada(imagenSeleccionada + 1);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>

        <div
          className="absolute left-0 bottom-0 h-1.5 bg-background/50"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};
