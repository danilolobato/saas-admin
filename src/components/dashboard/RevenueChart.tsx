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
              <stop offset="5%" stopColor="#E8936B" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#E8936B" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#3E2F40" />
          <XAxis
            dataKey="month"
            stroke="#A89AA8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#A89AA8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `$${v / 1000}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#241B28",
              border: "1px solid #3E2F40",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            labelStyle={{ color: "#F5EEF2" }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#E8936B"
            strokeWidth={2}
            fill="url(#revenueFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}