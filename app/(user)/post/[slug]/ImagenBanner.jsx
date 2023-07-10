import { sanityClient } from "@/lib/sanity.client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

export const ImagenBanner = ({ imagen }) => {
  const imageProps = useNextSanityImage(sanityClient, imagen);

  return (
    <div>
      <Image
        src={imageProps?.src || ""}
        alt={"Banner"}
        width={imageProps?.width}
        height={imageProps?.height}
        className="
            w-full
            object-cover
            object-center
            h-[390px]
            rounded-lg
        "
      />
    </div>
  );
};
