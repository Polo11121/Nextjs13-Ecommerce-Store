import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PreviewModal } from "@/components/PreviewModal";
import { Toaster } from "react-hot-toast";
import { MountingProvider } from "@/providers/MountingProvider";
import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={font.className}>
      <Toaster />
      <MountingProvider>
        <PreviewModal />
      </MountingProvider>
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
