import { headers } from "next/headers";
import { Webhook } from "svix";
import { createAdminClient } from "@/lib/supabase/admin";

type ClerkWebhookEvent = {
  type: string;
  data: {
    id: string;
  };
};

async function seedDemoData(clerkUserId: string) {
  const supabase = createAdminClient();

  // Evitamos duplicar datos si el webhook se reintenta
  const { count } = await supabase
    .from("customers")
    .select("id", { count: "exact", head: true })
    .eq("clerk_user_id", clerkUserId);

  if (count && count > 0) {
    return;
  }

  await supabase.from("user_settings").upsert(
    {
      clerk_user_id: clerkUserId,
      company_name: "",
      notify_by_email: true,
    },
    { onConflict: "clerk_user_id" }
  );

  await supabase.from("customers").insert([
    { clerk_user_id: clerkUserId, name: "Lucía Fernández", email: "lucia@empresa.com", plan: "Pro", status: "active", mrr: 49 },
    { clerk_user_id: clerkUserId, name: "Martín Sosa", email: "martin@startup.io", plan: "Enterprise", status: "active", mrr: 399 },
    { clerk_user_id: clerkUserId, name: "Carla Díaz", email: "carla@negocio.com", plan: "Free", status: "trial", mrr: 0 },
    { clerk_user_id: clerkUserId, name: "Nicolás Ríos", email: "nico@dev.com", plan: "Pro", status: "churned", mrr: 0 },
    { clerk_user_id: clerkUserId, name: "Valentina Paz", email: "valen@equipo.com", plan: "Enterprise", status: "active", mrr: 399 },
  ]);

  await supabase.from("revenue_monthly").insert([
    { clerk_user_id: clerkUserId, month: "Ene", revenue: 4200 },
    { clerk_user_id: clerkUserId, month: "Feb", revenue: 5100 },
    { clerk_user_id: clerkUserId, month: "Mar", revenue: 4800 },
    { clerk_user_id: clerkUserId, month: "Abr", revenue: 6300 },
    { clerk_user_id: clerkUserId, month: "May", revenue: 7200 },
    { clerk_user_id: clerkUserId, month: "Jun", revenue: 6900 },
    { clerk_user_id: clerkUserId, month: "Jul", revenue: 8100 },
  ]);

  await supabase.from("traffic_sources").insert([
    { clerk_user_id: clerkUserId, source: "Orgánico", sesiones: 1200, conversiones: 96 },
    { clerk_user_id: clerkUserId, source: "Pagado", sesiones: 890, conversiones: 142 },
    { clerk_user_id: clerkUserId, source: "Referido", sesiones: 430, conversiones: 38 },
    { clerk_user_id: clerkUserId, source: "Directo", sesiones: 610, conversiones: 51 },
    { clerk_user_id: clerkUserId, source: "Social", sesiones: 320, conversiones: 22 },
  ]);
}

export async function POST(req: Request) {
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return new Response("Falta CLERK_WEBHOOK_SECRET", { status: 500 });
  }

  const headerList = await headers();
  const svixId = headerList.get("svix-id");
  const svixTimestamp = headerList.get("svix-timestamp");
  const svixSignature = headerList.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Faltan headers de svix", { status: 400 });
  }

  const body = await req.text();
  const wh = new Webhook(webhookSecret);

  try {
    wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    });
  } catch (err) {
    console.error("Firma de webhook inválida:", err);
    return new Response("Firma inválida", { status: 400 });
  }

  const event = JSON.parse(body) as ClerkWebhookEvent;

  if (event.type === "user.created") {
    try {
      await seedDemoData(event.data.id);
    } catch (err) {
      console.error("Error al sembrar datos de demo:", err);
      return new Response("Error al guardar en Supabase", { status: 500 });
    }
  }

  return new Response("OK", { status: 200 });
}