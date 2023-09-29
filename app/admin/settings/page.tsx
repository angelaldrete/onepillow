"use client";
import SettingsList from "./components/SettingsList";
import Setting from "./types/Settings";

const Settings = () => {
  const settings: Setting[] = [
    {
      name: "Dark Mode",
      description: "Enable dark mode",
      onClick: () => {
        document.body.classList.toggle("dark");
      },
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
