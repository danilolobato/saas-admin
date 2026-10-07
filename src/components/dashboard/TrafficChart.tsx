"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

type TrafficPoint = { source: string; sesiones: number; conversiones: number };

export function TrafficChart({ data }: { data: TrafficPoint[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#3E2F40" />
          <XAxis
            dataKey="source"
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
          <Legend wrapperStyle={{ fontSize: "12px", color: "#A89AA8" }} />
          <Bar dataKey="sesiones" fill="#564258" radius={[4, 4, 0, 0]} />
          <Bar dataKey="conversiones" fill="#E8936B" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}