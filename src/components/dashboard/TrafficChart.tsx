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
          <CartesianGrid strokeDasharray="3 3" stroke="#34302C" />
          <XAxis
            dataKey="source"
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
          <Legend wrapperStyle={{ fontSize: "12px", color: "#9C9488" }} />
          <Bar dataKey="sesiones" fill="#4B453F" radius={[4, 4, 0, 0]} />
          <Bar dataKey="conversiones" fill="#D9A62E" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}