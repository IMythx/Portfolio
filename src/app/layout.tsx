import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/global/cursor";
import SideBar from "@/components/global/sidebar";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const rubuik = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Mahmoud helal",
  description: "my portfolio",
  keywords: [
    "portfolio",
    "web",
    "developer",
    "front end",
    "mahmoud",
    "helal",
    "React",
    "nextjs",
  ],
  authors: {
    name: "Mahmoud Helal",
  },
  applicationName: "Mahmoud Helal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-rubik dark", rubuik.variable)}>
        <Cursor />
        <SideBar />
        {children}
        <Toaster richColors={true} />
      </body>
    </html>
  );
}
