/* https://supabase.com/docs/reference/javascript/typescript-support */

import { MergeDeep } from 'type-fest'
import type { Database as DatabaseGenerated } from "./generated-database.types"
export type { Json } from "./generated-database.types"

export type Database = MergeDeep<
  DatabaseGenerated,
  {
    interface: {
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
