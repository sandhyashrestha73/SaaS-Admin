// src/layouts/DashboardLayout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidenavbar';
import Navbar from '../components/Navbar';

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="flex-1 min-h-screen flex flex-col">
          <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
          <main className="p-4 md:p-6 lg:p-8 w-full">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}