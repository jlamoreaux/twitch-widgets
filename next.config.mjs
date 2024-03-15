/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => {
    return [
      {
        source: "/api/trackers/:slug*",
        headers: [
          {
            key: "s-maxage",
            value: "60",
          }
        ]
      },
    ]
  }
};

export default nextConfig;
