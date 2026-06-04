import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidenavbar";
import Navbar from "../components/Navbar";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  // 🌙 theme state
  const [darkMode, setDarkMode] = useState(false);

  // load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
  }, []);

  // apply theme to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="flex">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        <div className="flex-1 min-h-screen flex flex-col">
          <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />

          <main className="p-4 md:p-6 lg:p-8 w-full text-black dark:text-white">
            <Outlet />
          </main>
        </div>

        {/* AI Button */}
        <button className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full">
          AI
        </button>

        {/* 🌙 Theme Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed bottom-5 left-5 bg-gray-800 text-white p-3 rounded-full"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
}