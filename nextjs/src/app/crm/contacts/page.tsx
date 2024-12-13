"use client";

import { createBrowserClient } from "@/utils/supabase/client";
import { MuiListInferencer } from "@refinedev/inferencer/mui"

export default function ContactList() {
  const supabase = createBrowserClient()
  supabase.from('contacts').select('*').then(({ data }) => {
    console.log(data)
  })
  return <MuiListInferencer />
}
