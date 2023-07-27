import React from "react";

const useOverallMetrics = () => {
  const listItems: MetricCard[] = [
    {
      id: 1,
      metricTitle: "Your reservations",
      metricData: 24,
      gradientColors: ["var(--primary-color)", "var(--secondary-color)"],
    },
    {
      id: 2,
      metricTitle: "Total reservations",
      metricData: 124,
      gradientColors: ["var(--quinary-color)", "var(--secondary-color)"],
    },
    {
      id: 3,
      metricTitle: "Overall Profit",
      metricData: "$ 124",
      gradientColors: ["var(--primary-color)", "var(--tertiary-color)"],
    },
    {
      id: 4,
      metricTitle: "Average Reservations",
      metricData: 24,
      gradientColors: ["var(--tertiary-color)", "var(--quinary-color)"],
    },
  ];

  return listItems;
};

export default useOverallMetrics;
