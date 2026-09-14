import { auth } from "@clerk/nextjs/server";
import { LineChart } from "lucide-react";
import { StatStrip } from "@/components/dashboard/StatStrip";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { createAdminClient } from "@/lib/supabase/admin";

export default async function DashboardPage() {
  const { userId } = await auth();
  const supabase = createAdminClient();

  const [{ data: revenueData }, { data: customers }, { data: traffic }] =
    await Promise.all([
      supabase
        .from("revenue_monthly")
        .select("month, revenue")
        .eq("clerk_user_id", userId)
        .order("created_at", { ascending: true }),
      supabase
        .from("customers")
        .select("status, plan, mrr")
        .eq("clerk_user_id", userId),
      supabase
        .from("traffic_sources")
        .select("sesiones, conversiones")
        .eq("clerk_user_id", userId),
    ]);

  const revenue = revenueData ?? [];
  const customerList = customers ?? [];
  const trafficList = traffic ?? [];

  const totalMrr = customerList
    .filter((c) => c.status === "active")
    .reduce((sum, c) => sum + Number(c.mrr), 0);

  const lastTwo = revenue.slice(-2);
  const revenueChange =
    lastTwo.length === 2 && Number(lastTwo[0].revenue) > 0
      ? Number(
          (
            ((Number(lastTwo[1].revenue) - Number(lastTwo[0].revenue)) /
              Number(lastTwo[0].revenue)) *
            100
          ).toFixed(1)
        )
      : 0;

  const activeCustomers = customerList.filter(
    (c) => c.status === "active"
  ).length;

  const totalSesiones = trafficList.reduce((sum, t) => sum + t.sesiones, 0);
  const totalConversiones = trafficList.reduce(
    (sum, t) => sum + t.conversiones,
    0
  );
  const conversionRate =
    totalSesiones > 0
      ? Number(((totalConversiones / totalSesiones) * 100).toFixed(1))
      : 0;

  const paidSubscriptions = customerList.filter(
    (c) => c.plan === "Pro" || c.plan === "Enterprise"
  ).length;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl italic">Resumen general</h2>
        <p className="mt-1 text-sm text-muted">
          Las métricas clave de tu producto esta semana.
        </p>
      </div>

      <StatStrip
        stats={[
          {
            label: "Ingresos totales (MRR)",
            value: `$${totalMrr.toLocaleString("es-AR")}`,
            change: revenueChange,
          },
          { label: "Clientes activos", value: activeCustomers.toString() },
          { label: "Tasa de conversión", value: `${conversionRate}%` },
          {
            label: "Suscripciones pagas",
            value: paidSubscriptions.toString(),
          },
        ]}
      />

      <div className="rounded-xl border border-line bg-surface p-6">
        <h3 className="mb-4 text-sm text-muted">Ingresos por mes</h3>
        {revenue.length > 0 ? (
          <RevenueChart data={revenue} />
        ) : (
          <EmptyState
            icon={LineChart}
            title="Todavía no hay ingresos cargados"
            description="En cuanto sumes tu primer mes de facturación, el gráfico va a aparecer acá."
          />
        )}
      </div>
    </div>
  );
}