"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, LineChart, Settings } from "lucide-react";

export const NAV_ITEMS = [
  { href: "/dashboard", label: "Resumen", icon: LayoutDashboard },
  { href: "/dashboard/analytics", label: "Analíticas", icon: LineChart },
  { href: "/dashboard/settings", label: "Ajustes", icon: Settings },
];

const ITEM_HEIGHT = 36; // h-9
const ITEM_GAP = 4; // gap-1

function getActiveIndex(pathname: string) {
  const exact = NAV_ITEMS.findIndex((item) => item.href === pathname);
  if (exact !== -1) return exact;

  let best = -1;
  let bestLength = 0;
  NAV_ITEMS.forEach((item, i) => {
    if (item.href === "/dashboard") return;
    if (pathname.startsWith(item.href + "/") && item.href.length > bestLength) {
      best = i;
      bestLength = item.href.length;
    }
  });
  return best;
}

export function Sidebar() {
  const pathname = usePathname();
  const activeIndex = getActiveIndex(pathname);

  return (
    <aside className="hidden w-60 flex-col border-r border-line bg-surface md:flex">
      <div className="flex h-16 items-center px-6">
        <span className="font-display text-lg italic tracking-tight">
          Nimbus
        </span>
      </div>

      <nav className="flex-1 px-3 py-4">
        <div className="relative flex flex-col gap-1">
          <span
            aria-hidden
            className="absolute left-0 top-0 w-full rounded-md border-l-2 border-signal bg-surface-raised transition-all duration-300 ease-out"
            style={{
              height: ITEM_HEIGHT,
              transform: `translateY(${
                Math.max(activeIndex, 0) * (ITEM_HEIGHT + ITEM_GAP)
              }px)`,
              opacity: activeIndex === -1 ? 0 : 1,
            }}
          />
          {NAV_ITEMS.map((item, i) => {
            const Icon = item.icon;
            const isActive = i === activeIndex;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative z-10 flex h-9 items-center gap-3 rounded-md px-3 text-sm transition-colors ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                <Icon
                  size={17}
                  className="transition-transform duration-200 group-hover:scale-110"
                />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-line p-4 text-xs text-muted">
        Versión 1.0
      </div>
    </aside>
  );
}