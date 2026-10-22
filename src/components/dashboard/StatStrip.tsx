import { TrendingDown, TrendingUp } from "lucide-react";
import { CountUp } from "@/components/CountUp";

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  change?: number;
};

export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="group relative animate-fade-up p-5 transition-colors hover:bg-surface-raised"
          style={{ animationDelay: `${i * 90}ms` }}
        >
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-signal transition-transform duration-500 group-hover:scale-x-100"
          />
          <p className="text-sm text-muted">{stat.label}</p>
          <p className="mt-2 font-mono text-2xl text-ink">
            <CountUp
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals}
            />
          </p>
          {typeof stat.change === "number" && stat.change !== 0 && (
            <p
              className={`mt-1 flex items-center gap-1 text-xs ${
                stat.change > 0 ? "text-signal" : "text-alert"
              }`}
            >
              {stat.change > 0 ? (
                <TrendingUp size={13} />
              ) : (
                <TrendingDown size={13} />
              )}
              {stat.change > 0 ? "+" : ""}
              {stat.change}% vs. mes anterior
            </p>
          )}
        </div>
      ))}
    </div>
  );
}