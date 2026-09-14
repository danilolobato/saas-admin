import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

const CONSOLE_STATS = [
  { label: "MRR", value: "$42,890" },
  { label: "Clientes activos", value: "184" },
  { label: "Conversión", value: "3.2%" },
];

const CONSOLE_BARS = [30, 45, 38, 52, 61, 55, 70, 64, 78, 72, 85, 90];

export default async function HomePage() {
  const { userId } = await auth();

  return (
    <main className="min-h-screen bg-canvas text-ink">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <span className="font-display text-xl italic tracking-tight">
          Nimbus
        </span>
        <nav className="flex items-center gap-6 text-sm">
          {userId ? (
            <Link
              href="/dashboard"
              className="rounded-full bg-signal px-5 py-2 font-medium text-signal-ink transition hover:opacity-90"
            >
              Ir al panel
            </Link>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="text-muted transition hover:text-ink"
              >
                Iniciar sesión
              </Link>
              <Link
                href="/sign-up"
                className="rounded-full bg-signal px-5 py-2 font-medium text-signal-ink transition hover:opacity-90"
              >
                Crear cuenta
              </Link>
            </>
          )}
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <h1 className="font-display text-4xl italic leading-[1.1] tracking-tight sm:text-5xl">
            Todo lo que pasa en tu producto, en una sola pantalla.
          </h1>
          <p className="mt-6 max-w-md text-muted">
            Ingresos, clientes y tráfico conectados en un panel que se lee de
            un vistazo, sin exportar nada a una hoja de cálculo.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Link
              href="/sign-up"
              className="rounded-full bg-signal px-6 py-3 text-sm font-medium text-signal-ink transition hover:opacity-90"
            >
              Empezar gratis
            </Link>
            <Link
              href="/sign-in"
              className="text-sm text-muted transition hover:text-ink"
            >
              Ya tengo cuenta
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-6">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <span className="font-mono text-xs text-muted">Resumen de hoy</span>
            <span className="h-2 w-2 rounded-full bg-signal" />
          </div>
          <div className="grid grid-cols-3 divide-x divide-line py-5">
            {CONSOLE_STATS.map((stat) => (
              <div key={stat.label} className="px-4 first:pl-0 last:pr-0">
                <p className="text-xs text-muted">{stat.label}</p>
                <p className="mt-1 font-mono text-lg text-ink">{stat.value}</p>
              </div>
            ))}
          </div>
          <div className="flex h-24 items-end gap-1.5 border-t border-line pt-5">
            {CONSOLE_BARS.map((height, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-signal/70 last:bg-signal"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl divide-y divide-line border-y border-line px-6">
        <FeatureRow
          title="Métricas en vivo"
          description="Ingresos, usuarios activos y conversión actualizados sin exportar nada."
        />
        <FeatureRow
          title="Acceso seguro"
          description="Autenticación gestionada con sesiones y roles, sin código extra."
        />
        <FeatureRow
          title="Datos en tiempo real"
          description="Las tablas se sincronizan con el panel al instante."
        />
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-xs text-muted">
        Nimbus — panel de control para equipos SaaS.
      </footer>
    </main>
  );
}

function FeatureRow({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 py-8 sm:grid-cols-[200px_1fr] sm:gap-8">
      <h3 className="font-display text-lg">{title}</h3>
      <p className="max-w-md text-sm text-muted">{description}</p>
    </div>
  );
}