"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";

export async function updateSettings(formData: FormData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("No autenticado");
  }

  const companyName = String(formData.get("companyName") ?? "").trim();
  const notifyByEmail = formData.get("notifyByEmail") === "on";

  const supabase = createAdminClient();

  const { error } = await supabase.from("user_settings").upsert(
    {
      clerk_user_id: userId,
      company_name: companyName,
      notify_by_email: notifyByEmail,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "clerk_user_id" }
  );

  if (error) {
    throw new Error(`Error al guardar: ${error.message}`);
  }

  revalidatePath("/dashboard/settings");
}