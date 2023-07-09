import Link from "next/link";
import Image from "next/image";

export const RichTextComponents = {
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </Link>
      );
    },
  },

  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-xl ml-10">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },

  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <li className="list-disc">{children}</li>,

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li className="list-disc">✅ {children}</li>,
  },
};
