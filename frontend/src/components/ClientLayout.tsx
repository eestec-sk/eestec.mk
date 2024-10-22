"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface ClientLayoutProps {
  children: React.ReactNode; 
  session: Session | null;
}

export default function ClientLayout({ children, session }: ClientLayoutProps) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
