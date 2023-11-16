import { Inter } from "next/font/google";
import "./Globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant App",
  description: "Restaurant App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
