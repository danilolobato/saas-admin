"use client";

import { useEffect } from "react";

export default function Error({
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
    <main className="flex min-h-screen flex-col items-center justify-center bg-canvas px-6 text-center text-ink">
      <p className="font-mono text-sm text-alert">Error</p>
      <h1 className="mt-3 font-display text-3xl italic">
        Algo salió mal.
      </h1>
      <p className="mt-3 max-w-sm text-sm text-muted">
        No pudimos cargar esta página. Podés intentar de nuevo.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full bg-signal px-6 py-3 text-sm font-medium text-signal-ink transition hover:opacity-90"
      >
        Reintentar
      </button>
    </main>
  );
}