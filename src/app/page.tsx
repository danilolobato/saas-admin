import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { Faq } from "@/components/landing/Faq";

const CONSOLE_STATS = [
  { label: "MRR", value: "$42,890" },
  { label: "Clientes activos", value: "184" },
  { label: "Conversión", value: "3.2%" },
];

const CONSOLE_BARS = [30, 45, 38, 52, 61, 55, 70, 64, 78, 72, 85, 90];

const STEPS = [
  {
    number: "01",
    title: "Conectá tus datos",
    description:
      "Enlazá tu base de datos y empezá a ver ingresos, clientes y tráfico sin configurar nada extra.",
  },
  {
    number: "02",
    title: "Mirá el panorama completo",
    description:
      "Métricas calculadas en vivo, sin exportar planillas ni armar reportes a mano.",
  },
  {
    number: "03",
    title: "Tomá decisiones a tiempo",
    description:
      "Detectá caídas de conversión o clientes en riesgo antes de que se conviertan en un problema.",
  },
];

const FEATURES = [
  {
    title: "Métricas en vivo",
    description:
      "Ingresos, usuarios activos y conversión actualizados sin exportar nada.",
  },
  {
    title: "Acceso seguro",
    description:
      "Autenticación gestionada con sesiones y roles, sin código extra.",
  },
  {
    title: "Datos en tiempo real",
    description: "Las tablas se sincronizan con el panel al instante.",
  },
  {
    title: "Seguridad por fila",
    description:
      "Cada usuario accede solo a su propia información, protegida a nivel de base de datos.",
  },
  {
    title: "Pensado para equipos chicos",
    description:
      "Sin curva de aprendizaje: lo que necesitás ver está a un clic, no enterrado en menús.",
  },
  {
    title: "100% responsive",
    description:
      "El mismo panel, cómodo de usar, desde el escritorio o desde el celular.",
  },
];

const STACK = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Clerk",
  "Supabase",
  "Vercel",
];

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

      {/* Hero */}
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
                className="flex-1 rounded-t-sm bg-signal/70 transition-all duration-300 hover:bg-signal last:bg-signal"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="mx-auto max-w-6xl border-y border-line px-6 py-16">
        <h2 className="font-display text-2xl italic">Cómo funciona</h2>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step) => (
            <div key={step.number}>
              <span className="font-mono text-sm text-signal">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl italic">
          Todo lo que necesitás, nada de lo que no
        </h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="grid grid-cols-1 gap-2 py-7 transition-colors hover:bg-surface/40 sm:grid-cols-[220px_1fr] sm:gap-8 sm:px-2"
            >
              <h3 className="font-display text-lg">{feature.title}</h3>
              <p className="max-w-md text-sm text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack técnico */}
      <section className="border-y border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-8">
          <span className="font-mono text-xs text-muted">Construido con</span>
          {STACK.map((tech) => (
            <span key={tech} className="font-mono text-sm text-muted">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-display text-2xl italic">Preguntas frecuentes</h2>
        <div className="mt-8">
          <Faq />
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="font-display text-3xl italic">
          Probalo, es gratis.
        </h2>
        <Link
          href="/sign-up"
          className="mt-6 inline-block rounded-full bg-signal px-6 py-3 text-sm font-medium text-signal-ink transition hover:opacity-90"
        >
          Crear cuenta
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-display text-lg italic">Nimbus</span>
            <p className="mt-2 text-xs text-muted">
              Panel de control para equipos SaaS.
            </p>
          </div>
          <div>
            <p className="text-xs text-muted">Producto</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/sign-up" className="text-ink hover:text-signal">
                  Crear cuenta
                </Link>
              </li>
              <li>
                <Link href="/sign-in" className="text-ink hover:text-signal">
                  Iniciar sesión
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-muted">Proyecto</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/danilolobato/saas-admin.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-signal"
                >
                  Código en GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line px-6 py-6 text-center text-xs text-muted">
          Nimbus — proyecto de portafolio, construido con Next.js y Supabase.
        </div>
      </footer>
    </main>
  );
}