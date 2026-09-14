"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, LineChart, Settings } from "lucide-react";

export const NAV_ITEMS = [
  { href: "/dashboard", label: "Resumen", icon: LayoutDashboard },
  { href: "/dashboard/analytics", label: "Analíticas", icon: LineChart },
  { href: "/dashboard/settings", label: "Ajustes", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 flex-col border-r border-line bg-surface md:flex">
      <div className="flex h-16 items-center px-6">
        <span className="font-display text-lg italic tracking-tight">
          Nimbus
        </span>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md border-l-2 px-3 py-2 text-sm transition ${
                isActive
                  ? "border-signal bg-surface-raised text-ink"
                  : "border-transparent text-muted hover:border-line hover:text-ink"
              }`}
            >
              <Icon size={17} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-line p-4 text-xs text-muted">
        Versión 1.0
      </div>
    </aside>
  );
}