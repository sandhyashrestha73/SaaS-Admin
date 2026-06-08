// src/components/Navbar.jsx
/*import React from 'react';

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
  );
}

function BellIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
  );
}

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  );
}

export default function Navbar({ collapsed, setCollapsed }) {
  return (
    <header className="w-full bg-white border-b">
      <div className="flex items-center justify-between p-3 md:p-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="md:hidden p-2 rounded-md hover:bg-slate-100 transition"
            aria-label="Toggle"
          >
            ☰
          </button>
          <div className="relative">
            <input
              className="pl-9 pr-3 py-2 rounded-md border w-56 md:w-96 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Search..."
            />
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400">
              <SearchIcon />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-md hover:bg-slate-100 transition relative">
            <BellIcon />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
          </button>

          <div className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100 transition">
            <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700">
              <UserIcon />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-medium">Sandhya</div>
              <div className="text-xs text-slate-500">Admin</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
  */



import React from "react";

export default function Navbar({ collapsed, setCollapsed, search, setSearch }) {
  return (
    <header className="w-full bg-white border-b">
      <div className="flex items-center  justify-between p-3 md:p-4">

        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-md hover:bg-slate-100 transition"
          >
            ☰
          </button>

        
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="hover:bg-slate-100 p-2 rounded-md transition">
            🔔
          </button>

          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-slate-300 rounded-full"><img className=" h-9 w-9 rounded-full" src="profile.png" alt="" /></div>
            <span className="text-sm">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}