"use client";

import React from "react";
import Setting from "../types/Settings";
import SettingItem from "./SettingItem";

interface SettingsListProps {
  settings: Setting[];
}

const SettingsList: React.FC<SettingsListProps> = ({ settings }) => {
  return (
    <ul className="settings__list">
      {settings.map((setting, idx) => (
        <li key={setting.name}>
          <SettingItem setting={setting} idx={idx} />
        </li>
      ))}
    </ul>
  );
};

export default SettingsList;
