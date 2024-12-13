"use client"

import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router";
import { refineSupabaseClient } from "@/utils/supabase/refine-client";
import { dataProvider, liveProvider } from "@refinedev/supabase";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    (<Refine
      dataProvider={dataProvider(refineSupabaseClient)}
      liveProvider={liveProvider(refineSupabaseClient)}
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
