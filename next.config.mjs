import { withContentlayer } from "next-contentlayer";

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: [ "image/avif", "image/webp" ]
  }
};

export default withContentlayer(nextConfig);