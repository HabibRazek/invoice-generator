import createMiddleware from 'next-intl/middleware';

export default createMiddleware({

  locales: ['en', 'de'],

  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(de|en)/:path*']
};
