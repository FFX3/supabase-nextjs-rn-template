/* https://supabase.com/docs/reference/javascript/typescript-support */

import { MergeDeep } from 'type-fest'
import { type Database as DatabaseGenerated } from "@/../../db/database.types"
export { type Json } from "@/../../db/database.types"

export type Database = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Views: {
        contacts: {
          Row: {
            id: number
          }
        }
      }
    }
  }
>
