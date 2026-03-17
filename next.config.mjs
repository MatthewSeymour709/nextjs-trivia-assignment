/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "export",
  reactCompiler: true,
  images: {
  unoptimized: true,
  remotePatterns: [
    { protocol: "https", hostname: "cdn.sanity.io" },
    { protocol: "https", hostname: "placehold.co" },
  ],
  },
};

export default nextConfig;
