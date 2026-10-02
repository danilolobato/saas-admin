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
    <main className="min-h-screen bg-canvas text-ink overflow-hidden relative selection:bg-signal selection:text-signal-ink">
      
      {/* Resplandor de fondo sutil para dar ambiente moderno */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-signal/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <span className="font-display text-2xl italic tracking-tight flex items-center gap-2">
          Nimbus
          <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
        </span>
        <nav className="flex items-center gap-6 text-sm">
          {userId ? (
            <Link
              href="/dashboard"
              className="rounded-full bg-signal px-6 py-2.5 font-medium text-signal-ink shadow-md shadow-signal/20 transition-all hover:opacity-90 hover:scale-105"
            >
              Ir al panel
            </Link>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="text-muted transition hover:text-ink font-medium"
              >
                Iniciar sesión
              </Link>
              <Link
                href="/sign-up"
                className="rounded-full bg-signal px-6 py-2.5 font-medium text-signal-ink shadow-md shadow-signal/20 transition-all hover:opacity-90 hover:scale-105"
              >
                Crear cuenta
              </Link>
            </>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-12 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-line text-xs font-medium text-muted mb-6 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            <span>Plataforma SaaS en tiempo real</span>
          </div>

          <h1 className="font-display text-4xl italic leading-[1.08] tracking-tight sm:text-6xl">
            Todo lo que pasa en tu producto, <span className="text-signal not-italic">en una sola pantalla.</span>
          </h1>
          <p className="mt-6 max-w-md text-muted text-base sm:text-lg leading-relaxed">
            Ingresos, clientes y tráfico conectados en un panel que se lee de
            un vistazo, sin exportar nada a una hoja de cálculo.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Link
              href="/sign-up"
              className="rounded-full bg-signal px-7 py-3.5 text-sm font-medium text-signal-ink shadow-lg shadow-signal/20 transition-all hover:opacity-90 hover:scale-105"
            >
              Empezar gratis
            </Link>
            <Link
              href="/sign-in"
              className="text-sm font-medium text-muted transition hover:text-ink border-b border-transparent hover:border-ink pb-0.5"
            >
              Ya tengo cuenta
            </Link>
          </div>
        </div>

        {/* Tarjeta / Mockup Mejorada */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-signal/20 rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition duration-500" />
          
          <div className="relative rounded-2xl border border-line bg-surface p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="font-mono text-xs text-muted flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                Resumen de hoy
              </span>
              <span className="font-mono text-[10px] text-muted bg-canvas px-2 py-0.5 rounded border border-line">LIVE</span>
            </div>
            
            <div className="grid grid-cols-3 divide-x divide-line py-6">
              {CONSOLE_STATS.map((stat) => (
                <div key={stat.label} className="px-3 first:pl-0 last:pr-0">
                  <p className="text-xs text-muted font-medium">{stat.label}</p>
                  <p className="mt-1 font-mono text-xl font-bold text-ink">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="flex h-28 items-end gap-2 border-t border-line pt-6">
              {CONSOLE_BARS.map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-signal/60 transition-all duration-300 hover:bg-signal hover:scale-y-105 last:bg-signal"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 mx-auto max-w-6xl divide-y divide-line border-y border-line px-6 my-12">
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

      {/* Footer */}
      <footer className="relative z-10 mx-auto max-w-6xl px-6 py-12 text-xs text-muted flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>Nimbus — panel de control para equipos SaaS.</p>
        <p className="font-mono text-[11px]">Production Environment</p>
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
    <div className="grid grid-cols-1 gap-2 py-8 sm:grid-cols-[220px_1fr] sm:gap-8 items-center group">
      <h3 className="font-display text-lg text-ink group-hover:text-signal transition-colors">{title}</h3>
      <p className="max-w-md text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}