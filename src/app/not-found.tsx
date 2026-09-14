import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-canvas px-6 text-center text-ink">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-3 font-display text-3xl italic">
        Esta página no existe.
      </h1>
      <p className="mt-3 max-w-sm text-sm text-muted">
        Puede que el link esté roto o que la página se haya movido.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-signal px-6 py-3 text-sm font-medium text-signal-ink transition hover:opacity-90"
      >
        Volver al inicio
      </Link>
    </main>
  );
}