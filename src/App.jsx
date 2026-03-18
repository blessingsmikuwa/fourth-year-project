 import React, { useState } from "react";

// 1. Data structure similar to your 'requests' array
const settingsSections = [
  {
    category: "Access & Registration",
    description: "Control how users sign up and access the platform",
    items: [
      { id: "reg", label: "Open Student Registration", sub: "Allow students to self-register without admin approval", enabled: true },
      { id: "teach", label: "Teacher Approval Required", sub: "Require admin to approve teacher accounts", enabled: true },
      { id: "school", label: "School Verification", sub: "Require verification before schools go live", enabled: true },
    ]
  },
  {
    category: "Content & Uploads",
    description: "Configure resource upload behaviour",
    items: [
      { id: "upload", label: "Teacher Upload Permission", sub: "Allow teachers to upload content (pending approval)", enabled: true },
    ]
  },
  {
    category: "Notifications",
    description: "Configure admin email alerts",
    items: [
      { id: "alert_reg", label: "New Registration Alerts", sub: "Email when new users register", enabled: true },
      { id: "alert_pend", label: "Upload Pending Alerts", sub: "Email when content awaits review", enabled: true },
    ]
  }
];

// 2. Reusable Switch Component (Similar to your ActionButton)
const ToggleSwitch = ({ isOn }) => {
  return (
    <div className={"w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${isOn ? 'bg-green-500' : 'bg-gray-600'}"}>
      <div className={"bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? 'translate-x-6' : ''}"}></div>
    </div>
  );
};

export default function SettingsPage() {
  return (
    <div className="bg-[#0B1220] min-h-screen text-white p-6 font-sans">
      {/* Header - Identical style to Requests Page */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Settings</h1>
          <p className="text-gray-400 text-sm">Platform configuration</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Search resources, users..."
              className="bg-[#111827] text-sm pl-10 pr-4 py-2 rounded-lg outline-none w-64 border border-gray-800"
            />
          </div>
          <button className="bg-green-500 px-4 py-2 rounded-lg font-medium text-sm">+ Add Resource</button>
          <div className="bg-[#111827] p-2 rounded-lg relative border border-gray-800">
            🔔 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Settings Container - Matches your Table container style */}
      <div className="bg-[#111827] rounded-2xl p-8 max-w-4xl">
        <h2 className="text-lg font-semibold mb-6">Platform Settings</h2>

        {settingsSections.map((section, idx) => (
          <div key={idx} className="mb-10">
            {/* Section Header */}
            <div className="mb-6">
              <h3 className="text-md font-medium text-white">{section.category}</h3>
              <p className="text-gray-500 text-xs">{section.description}</p>
            </div>

            {/* Settings Items - Mapping logic similar to your requests.map */}
            <div className="space-y-6">
              {section.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-200">{item.label}</span>
                    <span className="text-xs text-gray-500 mt-1">{item.sub}</span>
 </div>
                  <ToggleSwitch isOn={item.enabled} />
                </div>
              ))}
            </div>
            
            {/* Divider except for last section */}
            {idx !== settingsSections.length - 1 && <div className="border-b border-gray-800 my-8"></div>}
          </div>
        ))}

        {/* Footer Action - Matching your green button style */}
        <div className="mt-8">
          <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}