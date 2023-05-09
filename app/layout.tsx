import "./globals.css";
import { Open_Sans } from "next/font/google";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "THE BLOG STASH",
  description:
    "Read, Edit and even generate your own Blogs using the power of GPT!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>{children}</body>
    </html>
  );
}
