import React from "react";
import useRecent from "../../hooks/useRecent";

const Recent = () => {
  const recentItems = useRecent();
  return (
    <>
      <ul className="recent__list"></ul>
    </>
  );
};

export default Recent;
