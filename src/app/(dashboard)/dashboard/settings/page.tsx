import { auth, currentUser } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { SettingsForm } from "@/components/dashboard/SettingsForm";

export default async function SettingsPage() {
  const { userId } = await auth();
  const user = await currentUser();
  const supabase = createAdminClient();

  const { data: settings } = await supabase
    .from("user_settings")
    .select("company_name, notify_by_email")
    .eq("clerk_user_id", userId)
    .maybeSingle();

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h2 className="font-display text-2xl italic">Ajustes</h2>
        <p className="mt-1 text-sm text-muted">
          Gestioná tu cuenta y las preferencias del panel.
        </p>
      </div>

      <div className="rounded-xl border border-line bg-surface p-6">
        <h3 className="mb-4 text-sm text-muted">Perfil de la cuenta</h3>
        <div className="flex items-center gap-4">
          {user?.imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.imageUrl}
              alt="Avatar"
              className="h-14 w-14 rounded-full border border-line"
            />
          )}
          <div>
            <p className="text-ink">{user?.fullName ?? "Sin nombre"}</p>
            <p className="text-sm text-muted">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted">
          Para cambiar tu nombre, email o contraseña, abrí tu perfil desde el
          ícono del header.
        </p>
      </div>

      <div className="rounded-xl border border-line bg-surface p-6">
        <h3 className="mb-4 text-sm text-muted">Preferencias</h3>
        <SettingsForm
          initialCompanyName={settings?.company_name ?? ""}
          initialNotifyByEmail={settings?.notify_by_email ?? true}
        />
      </div>
    </div>
  );
}