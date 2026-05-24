import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: []
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "lulabtech.com"
          }
        ],
        destination: "https://www.lulabtech.com/:path*",
        permanent: true
      },
      {
        source: "/paginas-web-empresas-panama",
        destination: "/paginas-web-corporativas-panama",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
