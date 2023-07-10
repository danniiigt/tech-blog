import { getPostBySlug } from "@/actions/getPostBySlug";
import { Container } from "@/components/shared/Container";
import { ImagenBanner } from "./ImagenBanner";
import { timeAgo } from "@/lib/timeAgo";
import { Separator } from "@/components/ui/separator";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "./RichTextComponents";

const PostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  return (
    <Container>
      <div className="my-8">
        <ImagenBanner imagen={post?.mainImage} />

        <div className="mt-8 flex items-center justify-between">
          <div>
            <h1 className="text-xl">{post?.title}</h1>

            <div className="text-muted-foreground flex items-center gap-2">
              <h1 className="text-xs">Publicado {timeAgo(post?._createdAt)}</h1>
              <Separator orientation="vertical" className="h-2" />
              <h1 className="text-xs">{post?.author?.name}</h1>
              <Separator orientation="vertical" className="h-2" />
              {post?.categories?.[0] && (
                <h1 className="text-xs">{post?.categories?.[0]?.title}</h1>
              )}
              <Separator orientation="vertical" className="h-2" />
              <h1 className="text-xs">192 visitas</h1>
            </div>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 hover:text-foreground cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 hover:text-foreground cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 hover:text-foreground cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
          </div>
        </div>

        {/* <div className="mt-4 space-y-4 w-full md:w-3/4 lg:2/3 text-muted-foreground">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            itaque veritatis debitis, corporis vero accusantium et at expedita
            inventore cum adipisci suscipit beatae autem quisquam nesciunt
            laborum sunt molestias dicta architecto? Similique corrupti, eius
            repellendus optio voluptate suscipit commodi sequi nisi? Aut,
            quaerat quae dicta hic quidem cupiditate neque explicabo magnam
            atque magni optio veniam dignissimos, autem eligendi quibusdam
            voluptatibus facilis id voluptatum eius fugiat nostrum culpa vitae.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo est
            alias odio atque cumque mollitia, aperiam blanditiis enim velit
            voluptatem vero vel? Necessitatibus enim odio, quisquam suscipit,
            deserunt labore praesentium odit amet aliquam, sit corporis culpa
            nemo. Eaque, accusamus asperiores perspiciatis iusto assumenda ipsa
            consequatur magni dolor nulla repellendus. Accusantium ipsa dicta
            repellendus id consequatur, accusamus repellat nemo eligendi animi!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            modi nihil. Similique, explicabo voluptatum. Reiciendis illum cum
            minus quae odio illo. Repudiandae eaque a placeat impedit inventore
            quos rem illo? Quas iure voluptates doloremque dolore, perferendis
            inventore cum blanditiis fuga?
          </p>
        </div> */}

        <div className="mt-4 space-y-4 w-full md:w-3/4 lg:2/3 text-muted-foreground">
          <PortableText value={post?.body} components={RichTextComponents} />
        </div>
      </div>
    </Container>
  );
};

export default PostPage;
