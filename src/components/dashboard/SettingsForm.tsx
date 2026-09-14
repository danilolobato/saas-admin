"use client";

import { useTransition, useState } from "react";
import { updateSettings } from "@/app/(dashboard)/dashboard/settings/actions";

type Props = {
  initialCompanyName: string;
  initialNotifyByEmail: boolean;
};

export function SettingsForm({
  initialCompanyName,
  initialNotifyByEmail,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);

  function handleSubmit(formData: FormData) {
    setSaved(false);
    startTransition(async () => {
      await updateSettings(formData);
      setSaved(true);
    });
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="companyName" className="mb-1.5 block text-sm text-muted">
          Nombre de la empresa
        </label>
        <input
          id="companyName"
          name="companyName"
          type="text"
          defaultValue={initialCompanyName}
          placeholder="Mi empresa"
          className="w-full rounded-md border border-line bg-canvas px-3 py-2 text-sm text-ink placeholder:text-muted focus:border-signal focus:outline-none"
        />
      </div>

      <div className="flex items-center justify-between rounded-md border border-line bg-canvas px-4 py-3">
        <div>
          <p className="text-sm text-ink">Notificaciones por email</p>
          <p className="text-xs text-muted">
            Recibí un resumen semanal de tus métricas.
          </p>
        </div>
        <input
          id="notifyByEmail"
          name="notifyByEmail"
          type="checkbox"
          defaultChecked={initialNotifyByEmail}
          className="h-5 w-5 rounded border-line bg-canvas accent-[#D9A62E]"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full bg-signal px-5 py-2 text-sm font-medium text-signal-ink transition hover:opacity-90 disabled:opacity-50"
        >
          {isPending ? "Guardando..." : "Guardar cambios"}
        </button>
        {saved && !isPending && (
          <span className="text-sm text-signal">Guardado</span>
        )}
      </div>
    </form>
  );
}