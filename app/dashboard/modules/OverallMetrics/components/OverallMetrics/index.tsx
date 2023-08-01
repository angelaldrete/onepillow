import React from "react";
import useOverallMetrics from "../../hooks/useOverallMetrics";
import MetricItem from "./MetricItem";

const OverallMetrics = () => {
  const listItems = useOverallMetrics();
  return (
    <>
      <ul className="overall-metrics__list">
        {listItems.map((item) => (
          <MetricItem
            key={item.id}
            id={item.id}
            metricTitle={item.metricTitle}
            metricData={item.metricData}
            gradientColors={item.gradientColors}
          />
        ))}
      </ul>
    </>
  );
};

export default OverallMetrics;
