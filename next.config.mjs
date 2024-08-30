/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-mdx-remote"],
  typescript: {
    ignoreBuildErrors: true, // This skips type checking
  },
};

export default nextConfig;
