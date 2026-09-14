type Stat = {
  label: string;
  value: string;
  change?: number;
};

export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 divide-y divide-line rounded-xl border border-line bg-surface sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="p-5">
          <p className="text-sm text-muted">{stat.label}</p>
          <p className="mt-2 font-mono text-2xl text-ink">{stat.value}</p>
          {typeof stat.change === "number" && stat.change !== 0 && (
            <p
              className={`mt-1 text-xs ${
                stat.change > 0 ? "text-signal" : "text-alert"
              }`}
            >
              {stat.change > 0 ? "+" : ""}
              {stat.change}% vs. mes anterior
            </p>
          )}
        </div>
      ))}
    </div>
  );
}