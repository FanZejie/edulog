import { createProxyMiddleware } from 'http-proxy-middleware';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',  // 代理的路径
        destination: 'http://localhost:8080/api/:path*',  // 代理到的后端接口地址
      },
    ];
  },
};

export default nextConfig;