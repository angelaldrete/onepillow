"use client";
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Tooltip,
} from "recharts";
import { format, parseISO } from "date-fns";
import { useState, useEffect } from "react";
import ChartData from "@/app/common/types/ChartData";

const DataChart = () => {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/reservation/month`
      );
      const data = await response.json();
      setData(data.monthlyReservations);
    };
    getData();
  }, []);

  if (data === null || data.length === 0) {
    return null;
  }

  return (
    <ResponsiveContainer
      minWidth={150}
      aspect={3 / 4}
      width="100%"
      minHeight={200}
      height="100%"
      maxHeight={400}
    >
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#df4496" stopOpacity={1} />
            <stop offset="75%" stopColor="#561b5d" stopOpacity={1} />
          </linearGradient>
        </defs>

        <Area dataKey="value" stroke="#561b5d" fill="url(#color)" />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, "MMM, d");
            } else {
              return "";
            }
          }}
          allowDataOverflow
          fontSize={"clamp(1rem, 1vw, 1.6rem)"}
        />

        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickFormatter={(number) => `${number.toFixed(2)}`}
          allowDataOverflow
          interval={0}
          fontSize={"clamp(1rem, 1vw, 1.6rem)"}
        />

        <Tooltip
          contentStyle={{
            background: "black",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            color: "white",
          }}
          formatter={(value: number) => `${value.toFixed(2)}`}
          content={<CustomTooltip />}
        />

        <CartesianGrid opacity={0.3} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: any;
  label?: any;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active) {
    return (
      <div
        style={{
          background: "#222",
          padding: "1rem",
          color: "white",
          borderRadius: "10px",
          fontSize: "clamp(1rem, 1vw, 1.6rem)",
        }}
      >
        <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
        <p
          style={{
            color: "#df4496",
            fontSize: "clamp(1rem, 1vw, 1.8rem)",
          }}
        >
          {payload[0].value.toFixed(2)}
        </p>
      </div>
    );
  }

  return null;
};

export default DataChart;
