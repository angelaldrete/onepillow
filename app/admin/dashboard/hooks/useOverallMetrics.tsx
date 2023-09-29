const useOverallMetrics = () => {
  const listItems: MetricCard[] = [
    {
      id: 1,
      metricTitle: "Total reservations",
      metricData: {
        url: "/api/reservation/total",
        returnObject: "totalReservations",
      },
      gradientColors: ["var(--primary-color)", "var(--secondary-color)"],
    },
    {
      id: 2,
      metricTitle: "Avg. reservations",
      metricData: {
        url: "/api/reservation/avg",
        returnObject: "avgReservations",
      },
      gradientColors: ["var(--quinary-color)", "var(--secondary-color)"],
    },
    {
      id: 3,
      metricTitle: "Total customers",
      metricData: {
        url: "/api/customer/total",
        returnObject: "totalCustomers",
      },
      gradientColors: ["var(--primary-color)", "var(--tertiary-color)"],
    },
    {
      id: 4,
      metricTitle: "Avg customers",
      metricData: {
        url: "/api/customer/avg",
        returnObject: "avgCustomers",
      },
      gradientColors: ["var(--tertiary-color)", "var(--quinary-color)"],
    },
  ];

  return listItems;
};

export default useOverallMetrics;
