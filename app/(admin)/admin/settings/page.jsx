import React from "react";
import SettingsForm from "./_components/settings-form";

export const metadata = {
  title: "Settings | Admin Projekt Cars",
  Description: "Manage dealerships working hours and admin users",
};

const page = () => {
  return (
    <div className="p-6">
      <div className="text-2xl font-bold mb-6">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        <SettingsForm />
      </div>
    </div>
  );
};

export default page;
