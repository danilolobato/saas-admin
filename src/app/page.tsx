import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight, Sparkles, Zap, ShieldCheck, Activity, TrendingUp, Users } from "lucide-react";

export default async function HomePage() {
  const { userId } = await auth();

  return (
    <main className="min-h-screen bg-canvas text-ink selection:bg-signal selection:text-signal-ink overflow-x-hidden">
      
      {/* Background Glow Effects dinámicos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-signal/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header flotante con glassmorphism */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-canvas/80 border-b border-line">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="font-display text-2xl italic tracking-tight flex items-center gap-2">
            Nimbus
            <span className="h-2 w-2 rounded-full bg-signal animate-ping" />
          </span>
          <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
            {userId ? (
              <Link
                href="/dashboard"
                className="rounded-full bg-signal px-6 py-2.5 text-signal-ink shadow-lg shadow-signal/20 transition-all hover:scale-105"
              >
                Ir al panel →
              </Link>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="text-muted transition hover:text-ink hidden sm:inline-block"
                >
                  Iniciar sesión
                </Link>
                <Link
                  href="/sign-up"
                  className="rounded-full bg-signal px-6 py-2.5 text-signal-ink shadow-lg shadow-signal/20 transition-all hover:scale-105"
                >
                  Comenzar gratis
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section principal rediseñado */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Mensaje y CTAs de impacto */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Badge superior moderno */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-line text-xs font-medium text-muted mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-signal animate-spin" />
              <span>La evolución del control SaaS empresarial</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl italic leading-[1.02] tracking-tight text-ink">
              Todo lo que pasa en tu producto, <span className="text-signal not-italic block mt-1">en una sola pantalla.</span>
            </h1>
            
            <p className="mt-6 text-muted text-lg sm:text-xl leading-relaxed max-w-xl">
              Olvídate de las planillas eternas. Ingresos, clientes activos y métricas de tráfico sincronizadas en un panel ultrarrápido diseñado para decidir mejor.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-8 py-4 text-base font-semibold text-signal-ink shadow-xl shadow-signal/25 transition-all hover:scale-105"
              >
                Crear cuenta gratis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-line bg-surface/50 px-8 py-4 text-base font-medium text-muted transition-all hover:text-ink hover:border-ink/30"
              >
                Conocer más
              </Link>
            </div>

            {/* Métricas rápidas de confianza */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-line w-full">
              <div>
                <p className="font-display text-2xl font-bold text-ink">+99.9%</p>
                <p className="text-xs text-muted mt-1">Uptime garantizado</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-ink">&lt; 15ms</p>
                <p className="text-xs text-muted mt-1">Latencia global</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-ink">Realtime</p>
                <p className="text-xs text-muted mt-1">Sincronización</p>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Bento Grid / Mockup Interactivo 3D-like */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-signal/20 to-purple-500/20 rounded-3xl blur-2xl opacity-70 animate-pulse" />
            
            <div className="relative rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-2xl backdrop-blur-xl flex flex-col gap-6">
              
              {/* Barra superior de la tarjeta */}
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-xs text-muted bg-canvas px-3 py-1 rounded-full border border-line">
                  nimbus-core.prod
                </span>
              </div>

              {/* Bento Grid interno simulando el SaaS */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Tarjeta Bento 1: MRR */}
                <div className="col-span-2 sm:col-span-1 rounded-2xl bg-canvas p-5 border border-line flex flex-col justify-between hover:border-signal/50 transition-colors group">
                  <div className="flex items-center justify-between text-muted mb-4">
                    <span className="text-xs font-medium">Ingresos Recurrentes (MRR)</span>
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-mono text-3xl font-extrabold text-ink">$42,890</div>
                    <div className="text-xs text-emerald-400 mt-1 font-medium flex items-center gap-1">
                      <span>↑ +14.2%</span> vs mes anterior
                    </div>
                  </div>
                </div>

                {/* Tarjeta Bento 2: Clientes */}
                <div className="col-span-2 sm:col-span-1 rounded-2xl bg-canvas p-5 border border-line flex flex-col justify-between hover:border-signal/50 transition-colors group">
                  <div className="flex items-center justify-between text-muted mb-4">
                    <span className="text-xs font-medium">Clientes Activos</span>
                    <Users className="w-4 h-4 text-signal" />
                  </div>
                  <div>
                    <div className="font-mono text-3xl font-extrabold text-ink">1,184</div>
                    <div className="text-xs text-signal mt-1 font-medium">
                      +38 nuevos hoy
                    </div>
                  </div>
                </div>

              </div>

              {/* Gráfico de barras estilizado dentro del Bento */}
              <div className="rounded-2xl bg-canvas p-5 border border-line">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-muted flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-signal animate-pulse" />
                    Flujo de tráfico en vivo
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    🟢 Activo
                  </span>
                </div>
                <div className="flex h-32 items-end gap-2 pt-2">
                  {[35, 50, 42, 68, 75, 60, 85, 78, 92, 88, 96, 100].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-signal/40 to-signal transition-all duration-300 hover:scale-y-105"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Sección de Features con tarjetas minimalistas flotantes */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20 border-t border-line">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl italic tracking-tight text-ink">
            Diseñado para destacar sin fricción.
          </h2>
          <p className="text-muted mt-4 text-base">
            Cada componente fue pensado para ofrecer velocidad, estética superior y seguridad de nivel bancario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Zap className="w-5 h-5 text-signal" />}
            title="Métricas en tiempo real" 
            description="Visualiza cada transacción y usuario activo al instante gracias a una arquitectura optimizada para alto rendimiento." 
          />
          <FeatureCard 
            icon={<ShieldCheck className="w-5 h-5 text-signal" />}
            title="Seguridad y Roles" 
            description="Autenticación robusta integrada de punta a punta con gestión de accesos y protección de datos avanzada." 
          />
          <FeatureCard 
            icon={<Activity className="w-5 h-5 text-signal" />}
            title="Panel sin fricción" 
            description="Una interfaz limpia y directa al grano que te permite auditar el estado de tu negocio en segundos." 
          />
        </div>
      </section>

      {/* Footer elegante */}
      <footer className="border-t border-line bg-canvas">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Nimbus. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/sign-in" className="hover:text-ink transition">Privacidad</Link>
            <Link href="/sign-in" className="hover:text-ink transition">Términos de servicio</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-8 transition-all hover:border-signal/50 hover:scale-[1.02] group">
      <div className="w-10 h-10 rounded-xl bg-canvas border border-line flex items-center justify-center mb-6 group-hover:border-signal/40 transition-colors">
        {icon}
      </div>
      <h3 className="font-display text-xl text-ink mb-3">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}