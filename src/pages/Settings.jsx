// src/pages/Settings.jsx
import React from 'react';

export default function Settings() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold">Account Settings</h3>
        <div className="mt-4 space-y-4">
          <div>
            <label className="text-sm text-slate-600">Name</label>
            <input className="w-full mt-1 px-3 py-2 border rounded-md" defaultValue="Sandhya Shrestha" />
          </div>

          <div>
            <label className="text-sm text-slate-600">Email</label>
            <input className="w-full mt-1 px-3 py-2 border rounded-md" defaultValue="sandhya@example.com" />
          </div>

          <div>
            <label className="text-sm text-slate-600">Password</label>
            <input type="password" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="••••••••" />
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-primary text-white rounded-md">Save changes</button>
            <button className="px-4 py-2 border rounded-md">Cancel</button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold">Preferences</h3>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Theme</div>
              <div className="text-xs text-slate-500">Light / Dark mode</div>
            </div>
            <select className="px-3 py-2 border rounded-md">
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Notifications</div>
              <div className="text-xs text-slate-500">Email and in-app</div>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm">Email</label>
              <input type="checkbox" className="h-4 w-4" defaultChecked />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}