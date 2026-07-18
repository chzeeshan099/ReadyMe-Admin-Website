import { Toaster } from 'react-hot-toast';
import { ToastContainer} from "react-toastify";
import GlobalDrawer from '@/shared/drawer-views/container';
import GlobalModal from '@/shared/modal-views/container';
import { ThemeProvider } from '@/shared/theme-provider';
import { siteConfig } from '@/config/site.config';
import { inter, lexendDeca } from '@/app/fonts';
import StoreProvider from "./StoreProvider"
import LiveChat from '@/components/LiveChat';
import cn from '@/utils/class-names';
import NextProgress from '@/components/others/next-progress';
import '@/app/globals.css';



export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon:'/AirbnbLogo3.png',
    shortcut: '/AirbnbLogo3.png',
    apple: '/AirbnbLogo3.png',
  },
}; 

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className={cn(inter.variable, lexendDeca.variable, 'font-inter')}
      >

        <StoreProvider>
          <ThemeProvider>
            <NextProgress />
            {children}
            <Toaster />
            <ToastContainer />
            <GlobalDrawer />
            <GlobalModal />
            <LiveChat />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
