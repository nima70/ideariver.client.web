/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false, // Disable SWC minification
  transpilePackages: ["next-mdx-remote"],
  typescript: {
    ignoreBuildErrors: true, // This skips type checking
  },
};

export default nextConfig;
