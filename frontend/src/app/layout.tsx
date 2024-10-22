import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import ClientLayout from "../components/ClientLayout"; 
import HeaderComponent from "@/components/HeaderComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eestec.mk",
  description: "Official EESTEC LC Skopje website!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch the session server-side
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout session={session}>
          <HeaderComponent />
          {children}
        </ClientLayout>
      </body>
    </html>
  )
};