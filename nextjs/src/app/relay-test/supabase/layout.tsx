"use client";

import { RelayEnvironmentProvider } from "react-relay";
import { getCurrentEnvironment } from "@/utils/relay/supabase/environment";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const environment = getCurrentEnvironment();

  return (
      <RelayEnvironmentProvider environment={environment}>
        {children}
      </RelayEnvironmentProvider>
  );
}
