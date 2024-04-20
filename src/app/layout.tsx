import type { Metadata } from "next";
import { DM_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import Navbar from "../components/globals/Navbar"
import Footer from "./Footer"

const open_sans = Open_Sans({ subsets: ["latin"],  variable: '--font-open_sans', },
);


// const open_sans = Open_Sans({ subsets: ["latin"] });
const dm_sans = DM_Sans({
  weight: ['400','500', '600', '700', '800', '900'],
  variable: '--font-dm-sans',
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={`${open_sans.variable} ${dm_sans.className} ${"md:"}        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          open_sans.variable
        )}`}  > 
      
                 
      <Providers>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </Providers>
        </body>
    </html>

  );
}
