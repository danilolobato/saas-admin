"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

type RevenuePoint = { month: string; revenue: number };

export function RevenueChart({ data }: { data: RevenuePoint[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D9A62E" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#D9A62E" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#34302C" />
          <XAxis
            dataKey="month"
            stroke="#9C9488"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#9C9488"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `$${v / 1000}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1C1A18",
              border: "1px solid #34302C",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            labelStyle={{ color: "#F2EEE7" }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#D9A62E"
            strokeWidth={2}
            fill="url(#revenueFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}