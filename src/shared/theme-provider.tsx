'use client';

import { siteConfig } from '@/config/site.config';
import hideRechartsConsoleError from '@/utils/recharts-console-error';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';

hideRechartsConsoleError();

export function ThemeProvider({ children }: React.PropsWithChildren<{}>) {
  const pathname = usePathname();

  const isLandingPage = pathname === '/' || pathname.startsWith('/landing');
  
  return (
    <NextThemeProvider
      enableSystem={false}
      forcedTheme="light"
      defaultTheme="light"
    >
      {children}
    </NextThemeProvider>
  );
}
