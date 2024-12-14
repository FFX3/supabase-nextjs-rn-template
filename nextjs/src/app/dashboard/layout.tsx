"use client";

import { RelayEnvironmentProvider } from "react-relay";
import { getCurrentEnvironment } from "@/utils/relay/environment";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar"
import { Refine } from "@refinedev/core";
import { dataProvider, liveProvider } from "@refinedev/supabase";
import { createClient } from "@/utils/supabase/client";
import routerProvider from "@refinedev/nextjs-router";
import { ThemedLayoutV2 } from "@refinedev/mui"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const environment = getCurrentEnvironment();

  return (
    <RelayEnvironmentProvider environment={environment}>
      <RefineKbarProvider>
        <Refine
          dataProvider={dataProvider(createClient())}
          liveProvider={liveProvider(createClient())}
          routerProvider={routerProvider}
          resources={["contacts", "profile"].map(key=>({
            name: key,
            list: `/dashboard/${key}`,
            create: `/dashboard/${key}/new`,
            edit: `/dashboard/${key}/:id`,
          }))}
        >
          <ThemedLayoutV2
            //Header={()=><></>}
          >
            {children}
          </ThemedLayoutV2>
          <RefineKbar />
        </Refine>
      </RefineKbarProvider>
    </RelayEnvironmentProvider>
  );
}
