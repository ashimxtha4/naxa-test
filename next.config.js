/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.naxa.com.np",
        pathname: "",
      },
      
    ],
  },
};

module.exports = nextConfig;
