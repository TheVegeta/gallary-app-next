/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: "https://gallery-app-ktbq.onrender.com/graphql",
      },
    ];
  },
};

module.exports = nextConfig;
