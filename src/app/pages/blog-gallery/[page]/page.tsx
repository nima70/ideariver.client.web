// src/app/pages/blog-gallery/page.tsx

import React from "react";
import BlogCard from "@/components/BlogCard";
import {
  listMdxFiles,
  serializeMdxFile,
  FrontMatter,
  getBlogs,
  Blog,
} from "@/lib/mdxHelper";
import { MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface BlogGalleryProps {
  params: {
    page: number;
  };
}

const blogsPerPage = 6;

const getTotalPages = (blogs: Blog[]) => {
  return Math.ceil(blogs.length / blogsPerPage);
};

export const generateStaticParams = async (): Promise<number[]> => {
  const blogs = await getBlogs();
  const totalPages = getTotalPages(blogs);
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return pages;
};

export default async function BlogGallery({ params }: BlogGalleryProps) {
  const allBlogs = await getBlogs();
  const totalPages = getTotalPages(allBlogs);
  const indexOfLastBlog = params.page * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  if (totalPages === 0)
    return (
      <main className="flex flex-col items-center justify-between min-h-screen bg-background">
        <section className="bg-card py-16 w-full">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-8 text-foreground">
              Blog Gallery
            </h1>
            <p className="text-lg text-muted-foreground">
              No blogs available at the moment. Please check back later.
            </p>
          </div>
        </section>
      </main>
    );

  return (
    <main className="flex flex-col min-h-screen bg-background">
      <section className="flex flex-col flex-grow items-center justify-center bg-card py-16 w-full">
        <div className="container mx-auto px-6 text-center w-full flex-grow">
          <h1 className="text-4xl font-bold mb-24 text-foreground  md:mb-8 ">
            Blog Gallery
          </h1>
          <div className="flex flex-col items-center space-y-4">
            {currentBlogs.map((blog, index) => (
              <BlogCard
                key={index}
                title={blog.frontMatter.title}
                date={blog.frontMatter.date}
                description={blog.frontMatter.description}
                coverPhoto={blog.frontMatter.coverPhoto}
                href={`/pages/blogs/${blog.frontMatter.id}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-card py-4">
        <Pagination className="flex justify-center">
          <PaginationContent>
            {/* Only show "Previous" if not on the first page */}
            {params.page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href={`/pages/blog-gallery/${Math.max(params.page - 1, 1)}`}
                />
              </PaginationItem>
            )}
            {/* Show the pagination links */}
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href={`/pages/blog-gallery/${i + 1}`}
                  className={i + 1 === params.page ? "active" : ""}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            {/* Only show "Next" if not on the last page */}
            {params.page < totalPages && (
              <PaginationItem>
                <PaginationNext
                  href={`/pages/blog-gallery/${Math.min(params.page + 1, totalPages)}`}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </section>
    </main>
  );
}
