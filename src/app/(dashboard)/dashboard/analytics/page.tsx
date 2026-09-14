import { auth } from "@clerk/nextjs/server";
import { BarChart3, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { createAdminClient } from "@/lib/supabase/admin";
import { TrafficChart } from "@/components/dashboard/TrafficChart";
import { EmptyState } from "@/components/dashboard/EmptyState";

type Customer = {
  id: string;
  name: string;
  email: string;
  plan: "Free" | "Pro" | "Enterprise";
  status: "active" | "trial" | "churned";
  mrr: number;
};

const statusStyles: Record<Customer["status"], string> = {
  active: "border-signal/30 bg-signal/10 text-signal",
  trial: "border-line bg-surface-raised text-muted",
  churned: "border-alert/30 bg-alert/10 text-alert",
};

const statusLabel: Record<Customer["status"], string> = {
  active: "Activo",
  trial: "Prueba",
  churned: "Cancelado",
};

export default async function AnalyticsPage() {
  const { userId } = await auth();
  const supabase = createAdminClient();

  const [{ data: traffic }, { data: customers }] = await Promise.all([
    supabase
      .from("traffic_sources")
      .select("source, sesiones, conversiones")
      .eq("clerk_user_id", userId),
    supabase
      .from("customers")
      .select("id, name, email, plan, status, mrr")
      .eq("clerk_user_id", userId)
      .order("created_at", { ascending: false }),
  ]);

  const trafficList = traffic ?? [];
  const customerList = (customers ?? []) as Customer[];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl italic">Analíticas</h2>
        <p className="mt-1 text-sm text-muted">
          Origen de tráfico y detalle de clientes.
        </p>
      </div>

      <div className="rounded-xl border border-line bg-surface p-6">
        <h3 className="mb-4 text-sm text-muted">
          Sesiones y conversiones por canal
        </h3>
        {trafficList.length > 0 ? (
          <TrafficChart data={trafficList} />
        ) : (
          <EmptyState
            icon={BarChart3}
            title="Todavía no hay tráfico registrado"
            description="Cuando conectes tus fuentes de tráfico, vas a ver el desglose por canal acá."
          />
        )}
      </div>

      <div className="overflow-hidden rounded-xl border border-line bg-surface">
        {customerList.length > 0 ? (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-line text-muted">
              <tr>
                <th className="px-6 py-3 font-normal">Cliente</th>
                <th className="px-6 py-3 font-normal">Plan</th>
                <th className="px-6 py-3 font-normal">Estado</th>
                <th className="px-6 py-3 text-right font-normal">MRR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {customerList.map((customer) => (
                <tr key={customer.id}>
                  <td className="px-6 py-4">
                    <div className="text-ink">{customer.name}</div>
                    <div className="text-xs text-muted">{customer.email}</div>
                  </td>
                  <td className="px-6 py-4 text-muted">{customer.plan}</td>
                  <td className="px-6 py-4">
                    <span
                      className={cn(
                        "rounded-full border px-2.5 py-0.5 text-xs",
                        statusStyles[customer.status]
                      )}
                    >
                      {statusLabel[customer.status]}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-ink">
                    ${customer.mrr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <EmptyState
            icon={Users}
            title="Todavía no tenés clientes cargados"
            description="Cuando sumes tu primer cliente, va a aparecer acá con su plan y estado."
          />
        )}
      </div>
    </div>
  );
}