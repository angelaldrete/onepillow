"use client";
import React from "react";
import SettingsList from "./components/SettingsList";
import Setting from "./types/Settings";

const Settings = () => {
  const settings: Setting[] = [
    {
      name: "Dark Mode",
      description: "Enable dark mode",
    },
    {
      name: "Notifications",
      description: "Enable notifications",
    },
    {
      name: "Email Notifications",
      description: "Enable email notifications",
    },
    {
      name: "Push Notifications",
      description: "Enable push notifications",
    },
    {
      name: "Change Password",
      description: "Change your password",
    },
    {
      name: "Delete Account",
      description: "Delete your account",
    },
    {
      name: "Export Data",
      description: "Export your data",
    },
  ];

  return (
    <div className="settings">
      <header className="settings__header">
        <h1 className="settings__title">Settings</h1>
      </header>
      <div className="settings__content">
        <SettingsList settings={settings} />
      </div>
    </div>
  );
};

export default Settings;
