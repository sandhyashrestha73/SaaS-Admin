// src/components/Cards.jsx
import React from 'react';
import clsx from 'clsx';

export function StatCard({ title, value, delta, icon, className }) {
  return (
    <div className={clsx('bg-white p-4 rounded-lg shadow-sm border', className)}>
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-slate-500">{title}</div>
          <div className="text-2xl font-semibold mt-1">{value}</div>
        </div>
        <div className="text-3xl text-primary">{icon}</div>
      </div>
      <div className="mt-2 text-sm text-slate-500">{delta}</div>
    </div>
  );
}

export function MiniCard({ label, amount }) {
  return (
    <div className="bg-white p-3 rounded-md shadow-sm border text-sm">
      <div className="text-slate-500">{label}</div>
      <div className="text-lg font-semibold mt-1">{amount}</div>
    </div>
  );
}