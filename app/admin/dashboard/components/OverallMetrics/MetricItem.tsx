import React from "react";
import Card from "@/app/components/Card";

interface MetricItemProps {
  id: number;
  metricTitle: string;
  metricData: any;
  gradientColors: string[];
}

async function getMetricData(metricData: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${metricData.url}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const data = await res.json();
  const metric = Object.values(data)[0];
  return metric;
}

const MetricItem: React.FC<MetricItemProps> = async ({
  id,
  metricTitle,
  metricData,
  gradientColors,
}) => {
  const data: any = await getMetricData(metricData);

  return (
    <Card
      style={{
        backgroundImage: `linear-gradient(45deg, ${gradientColors[0]}, ${gradientColors[1]})`,
        animationDelay: `${id * 0.2}s`,
      }}
    >
      <p>{metricTitle}</p>
      <h2 className="metric-data">{data}</h2>
    </Card>
  );
};

export default MetricItem;
