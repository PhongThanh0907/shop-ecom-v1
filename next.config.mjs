/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kccshop.vn",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
