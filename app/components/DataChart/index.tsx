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
import { clamp, format, parseISO, subDays } from "date-fns";
import { useState, useEffect } from "react";
import ChartData from "@/app/types/ChartData";

const data: ChartData[] = [];

for (let num = 30; num >= 0; num--) {
  data.push({
    date: format(subDays(new Date(), num), "yyyy-MM-dd"),
    value: Math.floor(Math.random() * 1000),
  });
}

const DataChart = () => {
  const [showAxises, setShowAxises] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
      setShowAxises(!isSmallScreen);
    };

    handleResize(); // Initial check on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          hide={!showAxises}
        />

        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickFormatter={(number) => `${number.toFixed(2)}`}
          allowDataOverflow
          interval={0}
          fontSize={"clamp(1rem, 1vw, 1.6rem)"}
          hide={!showAxises}
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

const CustomTooltip = ({ active, payload, label }: any) => {
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
        >{`$ ${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }

  return null;
};

export default DataChart;
