"use client";

import { useEffect } from "react";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-line bg-surface px-6 py-20 text-center">
      <p className="font-mono text-sm text-alert">Error</p>
      <h2 className="mt-3 font-display text-xl italic">
        No pudimos cargar esta sección.
      </h2>
      <p className="mt-2 max-w-sm text-sm text-muted">
        Intentá de nuevo. Si el problema sigue, revisá tu conexión a Supabase.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-full bg-signal px-5 py-2 text-sm font-medium text-signal-ink transition hover:opacity-90"
      >
        Reintentar
      </button>
    </div>
  );
}