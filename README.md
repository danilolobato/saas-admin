# Nimbus — Panel de control para SaaS

Panel de administración para productos SaaS con métricas de ingresos, clientes y tráfico en tiempo real. Autenticación gestionada con Clerk, datos en Supabase con seguridad a nivel de fila, y un webhook que siembra datos de demo automáticamente en cada registro nuevo.

**[Ver demo en vivo →](https://saas-admin-flax.vercel.app)**

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)
![Clerk](https://img.shields.io/badge/Auth-Clerk-6c47ff)
![Supabase](https://img.shields.io/badge/DB-Supabase-3ecf8e)

---

## Funcionalidades

- **Autenticación completa** — registro, login y sesiones con Clerk; rutas de `/dashboard` protegidas por middleware.
- **Métricas en tiempo real** — MRR, clientes activos, tasa de conversión y suscripciones pagas, calculadas desde datos reales en Supabase.
- **Analíticas** — desglose de tráfico por canal y tabla de clientes con estado y plan.
- **Webhooks Clerk → Supabase** — cada cuenta nueva recibe datos de ejemplo automáticamente al registrarse, sin intervención manual.
- **Seguridad por fila (RLS)** — cada usuario accede únicamente a sus propios datos; las tablas están bloqueadas para lectura directa desde el navegador y solo se acceden desde el servidor con la service role key.
- **Diseño responsive** — menú móvil, estados vacíos para cuentas sin datos, y páginas 404 / error con identidad propia.
- **Ajustes de cuenta** — preferencias persistidas en Supabase mediante Server Actions.

## Stack técnico

| Categoría | Tecnología |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Server Components, Server Actions) |
| Lenguaje | TypeScript |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) |
| Autenticación | [Clerk](https://clerk.com) |
| Base de datos | [Supabase](https://supabase.com) (PostgreSQL + Row Level Security) |
| Gráficos | [Recharts](https://recharts.org) |
| Tipografía | Fraunces (display) · IBM Plex Sans (UI) · IBM Plex Mono (datos) |
| Deploy | [Vercel](https://vercel.com) |

## Estructura del proyecto

```
src/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/[[...sign-in]]/page.tsx
│   │   └── sign-up/[[...sign-up]]/page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx              # Sidebar + header, protección de rutas
│   │   └── dashboard/
│   │       ├── page.tsx            # Resumen con métricas y gráfico
│   │       ├── analytics/page.tsx  # Tráfico y tabla de clientes
│   │       └── settings/
│   │           ├── page.tsx
│   │           └── actions.ts      # Server Action para guardar ajustes
│   ├── api/webhooks/clerk/route.ts # Siembra datos de demo al registrarse
│   ├── page.tsx                    # Landing
│   ├── layout.tsx                  # Fonts, ClerkProvider, metadata
│   ├── icon.tsx / apple-icon.tsx   # Favicon generado
│   ├── opengraph-image.tsx         # Imagen de vista previa al compartir
│   ├── not-found.tsx
│   └── error.tsx
├── components/dashboard/
│   ├── Sidebar.tsx / MobileNav.tsx
│   ├── StatStrip.tsx
│   ├── RevenueChart.tsx / TrafficChart.tsx
│   ├── EmptyState.tsx
│   └── SettingsForm.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts   # Cliente de navegador (anon key)
│   │   ├── server.ts   # Cliente de servidor con cookies
│   │   └── admin.ts    # Cliente con service role (bypassa RLS)
│   └── utils.ts
└── middleware.ts        # clerkMiddleware()
```

## Cómo correrlo localmente

### 1. Clonar e instalar

```bash
git clone https://github.com/TU-USUARIO/TU-REPO.git
cd TU-REPO
npm install
```

### 2. Variables de entorno

Creá un archivo `.env.local` en la raíz con:

```bash
# Clerk — dashboard.clerk.com → API Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Clerk — dashboard.clerk.com → Webhooks (endpoint /api/webhooks/clerk, evento user.created)
CLERK_WEBHOOK_SECRET=

# Supabase — Project Settings → API
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

### 3. Base de datos

En el SQL Editor de Supabase, creá las tablas `customers`, `revenue_monthly`, `traffic_sources` y `user_settings` con Row Level Security habilitado y una política que solo permita acceso vía `service_role`. El esquema completo está documentado en el código del webhook (`src/app/api/webhooks/clerk/route.ts`).

### 4. Correr en desarrollo

```bash
npm run dev
```

Para probar el webhook en local hace falta exponer el puerto 3000 con una herramienta como [ngrok](https://ngrok.com) y configurar esa URL en el panel de Webhooks de Clerk.

## Deploy

El proyecto está pensado para desplegarse en Vercel:

1. Conectá el repositorio en [vercel.com](https://vercel.com).
2. Cargá las mismas variables de entorno del paso anterior.
3. Creá un endpoint de webhook en Clerk apuntando a `https://tu-dominio.vercel.app/api/webhooks/clerk`.
4. Deploy.

---

Proyecto de portafolio construido para practicar un flujo completo de autenticación + base de datos + diseño en Next.js.