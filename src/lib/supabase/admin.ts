import { createClient as createSupabaseClient } from "@supabase/supabase-js";

// Este cliente usa la service_role key: bypassa RLS.
// SOLO se debe importar en código de servidor (Server Components,
// Route Handlers, Server Actions). Nunca en un componente "use client".
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}