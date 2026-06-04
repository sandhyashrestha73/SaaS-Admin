// src/pages/Home.jsx
import React from 'react';
import { StatCard, MiniCard } from '../components/Cards';
import { FiUsers, FiDollarSign, FiShoppingCart, FiActivity } from 'react-icons/fi';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

export default function Home() {
  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Active',
        data: [30, 45, 35, 60, 50, 75, 90],
        borderColor: '#6366F1',
        backgroundColor: 'rgba(99,102,241,0.12)',
        fill: true,
        tension: 0.35
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <StatCard title="New Users" value="1,248" delta="+8.2% vs last week" icon={<FiUsers />} />
        <StatCard title="Revenue" value="$18,430" delta="+4.5% vs last week" icon={<FiDollarSign />} />
        <StatCard title="Orders" value="432" delta="-1.2% vs last week" icon={<FiShoppingCart />} />
        <StatCard title="Active" value="7,892" delta="+12% vs last week" icon={<FiActivity />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Weekly Active Users</h3>
              <div className="text-sm text-slate-500">Performance over the last 7 days</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-sm px-3 py-1 rounded-md bg-slate-100">7d</button>
              <button className="text-sm px-3 py-1 rounded-md hover:bg-slate-100">30d</button>
            </div>
          </div>
          <div className="h-60">
            <Line data={lineData} options={{ plugins: { legend: { display: false } }, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="space-y-3">
          <MiniCard label="Avg. Order Value" amount="$42.70" />
          <MiniCard label="Conversion Rate" amount="3.8%" />
          <div className="bg-white p-3 rounded-md shadow-sm border">
            <div className="text-sm text-slate-500">Server Status</div>
            <div className="mt-2 text-green-600 font-medium">All systems operational</div>
          </div>
        </div>
      </div>
    </div>
  );
}