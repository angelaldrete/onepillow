import React from "react";

const useOverallMetrics = () => {
  const listItems: MetricCard[] = [
    {
      id: 1,
      metricTitle: "Total reservations",
      metricData: 24,
      gradientColors: ["var(--primary-color)", "var(--secondary-color)"],
    },
    {
      id: 2,
      metricTitle: "Avg. reservations",
      metricData: 124,
      gradientColors: ["var(--quinary-color)", "var(--secondary-color)"],
    },
    {
      id: 3,
      metricTitle: "Total customers",
      metricData: 12,
      gradientColors: ["var(--primary-color)", "var(--tertiary-color)"],
    },
    {
      id: 4,
      metricTitle: "Avg customers",
      metricData: 24,
      gradientColors: ["var(--tertiary-color)", "var(--quinary-color)"],
    },
  ];

  return listItems;
};

export default useOverallMetrics;
