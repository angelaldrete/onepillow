"use client";
import useOverallMetrics from "../../hooks/useOverallMetrics";
import MetricItem from "./MetricItem";

const OverallMetrics = () => {
  // const listItems = useOverallMetrics();
  const listItems: any[] = [];
  return (
    <>
      <ul className="overall-metrics__list">
        {listItems.map((item) => (
          <li key={item.id} className="overall-metrics__item">
            <MetricItem
              key={item.id}
              id={item.id}
              metricTitle={item.metricTitle}
              metricData={item.metricData}
              gradientColors={item.gradientColors}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default OverallMetrics;
