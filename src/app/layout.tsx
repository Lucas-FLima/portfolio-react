import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700", "300", "400"] });

export const metadata: Metadata = {
  title: "Lucas Lima | Developer",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} min-h-screen h-[1500px] bg-[#0D0D0D]`}
      >
        {children}
      </body>
    </html>
  );
}
