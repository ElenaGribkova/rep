/** @type {import('next').NextConfig} */
const patterns = [{ protocol: "http", hostname: "books.google.com" }];
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: patterns,
  },
};

export default nextConfig;
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
const nextConfig = {
  basePath: "/2048-in-react",
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;
