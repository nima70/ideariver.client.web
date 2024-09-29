// src/components/BlogPage.tsx

import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

// BlogPage UI-only component
export const BlogPage = ({
  frontMatter,
  raw,
}: {
  frontMatter: any;
  raw: string;
}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background text-foreground">
      <section className="bg-card py-16 w-full text-card-foreground">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-8 flex items-center justify-center mx-auto w-3/5">
            {frontMatter.title}
          </h1>
          {frontMatter.coverPhoto && (
            <div className="flex items-center justify-center">
              <Image
                src={frontMatter.coverPhoto}
                alt="Blog cover"
                width={1920}
                height={1080}
                className="shadow-lg w-3/5 my-6"
              />
            </div>
          )}
          <article className="prose lg:prose-xl bg-background text-foreground text-left mx-auto">
            <MDXRemote source={raw} />
          </article>
        </div>
      </section>
    </main>
  );
};
