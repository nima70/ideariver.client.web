// src/app/pages/blog-gallery/page.tsx

import React from "react";
import BlogGalleryUI from "@/components/BlogGalleryUI";
import { getBlogs, Blog } from "@/lib/mdxHelper";

interface BlogGalleryProps {
  params: {
    page: number;
  };
}

const blogsPerPage = 6;

const getTotalPages = (blogs: Blog[]) => {
  return Math.ceil(blogs.length / blogsPerPage);
};

export default async function BlogGallery({ params }: BlogGalleryProps) {
  const allBlogs = await getBlogs();
  const totalPages = getTotalPages(allBlogs);
  const indexOfLastBlog = params.page * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allBlogs
    .slice(indexOfFirstBlog, indexOfLastBlog)
    .map((blog) => ({
      title: blog.frontMatter.title,
      date: blog.frontMatter.date,
      description: blog.frontMatter.description,
      coverPhoto: blog.frontMatter.coverPhoto,
      id: blog.frontMatter.id,
    }));

  if (totalPages === 0) {
    return (
      <div>No blogs available at the moment. Please check back later.</div>
    );
  }

  return (
    <BlogGalleryUI
      currentPage={params.page}
      totalPages={totalPages}
      blogs={currentBlogs}
    />
  );
}
