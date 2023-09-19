"use client";

import React from "react";
import Setting from "../types/Settings";
import Card from "@/app/components/Card";

interface SettingItemProps {
  setting: Setting;
  idx: number;
}

const SettingItem: React.FC<SettingItemProps> = ({ setting, idx }) => {
  return (
    <Card
      className="setting"
      style={{
        animationDelay: `${idx * 0.1}s`,
      }}
    >
      <div className="setting__name">
        <strong>{setting.name}</strong>
      </div>
      <div className="setting__description">{setting.description}</div>
    </Card>
  );
};

export default SettingItem;
