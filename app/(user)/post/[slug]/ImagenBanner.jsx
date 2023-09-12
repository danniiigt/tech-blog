import Image from "next/image";
import { BlogReadTime } from "../../components/BlogReadTime";

export const ImagenBanner = ({ imagen, estimatedTime }) => {
  return (
    <div className="relative">
      {imagen && (
        <Image
          src={imagen}
          alt={"Banner"}
          width={1024}
          height={400}
          className="
        w-full
        object-cover
        object-center
        h-[390px]
        rounded-lg
        "
        />
      )}

      <BlogReadTime estimatedTime={estimatedTime} />
    </div>
  );
};
