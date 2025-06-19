import { DM_Sans, Montserrat } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import NavbarComponent from "@/common/navbar/navbar.component";
import FooterComponent from "@/common/footer/footer.component";
import { MetaDataCommon } from "@/meta/common/common.meta";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = MetaDataCommon;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${montserrat.variable}`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <div className="bg-primary min-h-screen">
            <NavbarComponent />
            {children}
            <FooterComponent />
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
