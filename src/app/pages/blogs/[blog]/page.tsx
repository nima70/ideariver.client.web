// src/app/pages/blog/[blog]/page.tsx

import { listMdxFiles, serializeMdxFile } from "@/lib/mdxHelper";
import { BlogPage as UI } from "./BlogPage";

// BlogPage container component responsible for passing props to UI component
export async function generateStaticParams() {
  const res = listMdxFiles("public/blogs");
  console.log(res);
  return res;
}

// Assuming BlogProps will include the necessary fields for the BlogPage UI
type BlogProps = {
  params: {
    blog: string;
  };
};

const BlogPage = async ({ params }: BlogProps) => {
  const { blog } = params;

  // Fetch the blog data (MDX content)
  const { frontMatter, raw } = await serializeMdxFile(blog, "public/blogs");

  // Pass frontMatter and raw to the UI component
  return <UI frontMatter={frontMatter} raw={raw} />;
};

export default BlogPage;
