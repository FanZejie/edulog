// middleware.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 检查登录状态
  const isLoggedIn = req.cookies.get('user') !== undefined; // 使用 cookies 而不是 localStorage

  // 如果用户未登录且访问的不是登录页面，则重定向到登录页面
  if (!isLoggedIn && pathname !== '/login' && pathname !== '/signup' && pathname !== '/dashboard/mistake-book') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // 允许访问
  return NextResponse.next();
}

// 指定中间件适用的路径
export const config = {
    matcher: ['/dashboard/:path*', '/'],
};
