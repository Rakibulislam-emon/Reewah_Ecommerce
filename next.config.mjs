/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // your image host
      },
      {
        protocol: "https",
        hostname: "image.reewah.com", // another host
      },
    ],
  },
};

export default nextConfig;
