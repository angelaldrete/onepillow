import React from "react";
import Card from "@/app/components/Card";

interface MetricItemProps {
  id: number;
  metricTitle: string;
  metricData: string | number;
  gradientColors: string[];
}

const MetricItem: React.FC<MetricItemProps> = ({
  id,
  metricTitle,
  metricData,
  gradientColors,
}) => {
  return (
    <Card
      style={{
        backgroundImage: `linear-gradient(45deg, ${gradientColors[0]}, ${gradientColors[1]})`,
        animationDelay: `${id * 0.2}s`,
      }}
    >
      <p>{metricTitle}</p>
      <h2 className="metric-data">{metricData}</h2>
    </Card>
  );
};

export default MetricItem;
