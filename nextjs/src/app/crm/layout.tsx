"use client"

import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router";
import { createClient } from "@/utils/supabase/client";
import { dataProvider, liveProvider } from "@refinedev/supabase";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    (<Refine
      dataProvider={dataProvider(createClient())}
      liveProvider={liveProvider(createClient())}
      routerProvider={routerProvider}
      resources={[{
        name: "contacts",
        list: "/crm/contacts",
        create: "/crm/contacts/create",
        edit: "/crm/contacts/edit/:id",
        show: "/crm/contacts/show/:id"
      }]}
    >
      <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100">
        {children}
      </div>
    </Refine>)
  );
}
