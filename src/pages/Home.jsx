// src/pages/Home.jsx
import React, { useState } from 'react';
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
  const [range, setRange] = useState('7d');

  // 7 days data
  const data7d = [30, 45, 35, 60, 50, 75, 90];
  const labels7d = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // 30 days data (sample)
  const data30d = [20, 35, 40, 55, 65, 70, 80, 60, 75, 85, 90, 95];
  const labels30d = Array.from({ length: 12 }, (_, i) => `Day ${i + 1}`);

  const lineData = {
    labels: range === '7d' ? labels7d : labels30d,
    datasets: [
      {
        label: 'Active',
        data: range === '7d' ? data7d : data30d,
        borderColor: '#6366F1',
        backgroundColor: 'rgba(99,102,241,0.12)',
        fill: true,
        tension: 0.35
      }
    ]
  };

  return (
    <div className="space-y-6">

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <StatCard title="New Users" value="1,248" delta="+8.2% vs last week" icon={<FiUsers />} />
        <StatCard title="Revenue" value="$18,430" delta="+4.5% vs last week" icon={<FiDollarSign />} />
        <StatCard title="Orders" value="432" delta="-1.2% vs last week" icon={<FiShoppingCart />} />
        <StatCard title="Active" value="7,892" delta="+12% vs last week" icon={<FiActivity />} />
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Weekly Active Users</h3>
              <div className="text-sm text-slate-500">
                Performance over the last {range === '7d' ? '7 days' : '30 days'}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setRange('7d')}
                className={`text-sm px-3 py-1 rounded-md ${
                  range === '7d' ? 'bg-slate-200' : 'hover:bg-slate-100'
                }`}
              >
                7d
              </button>

              <button
                onClick={() => setRange('30d')}
                className={`text-sm px-3 py-1 rounded-md ${
                  range === '30d' ? 'bg-slate-200' : 'hover:bg-slate-100'
                }`}
              >
                30d
              </button>
            </div>
          </div>

          <div className="h-60">
            <Line
              data={lineData}
              options={{
                plugins: { legend: { display: false } },
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>

        {/* Side Cards */}
        <div className="space-y-3">
          <MiniCard label="Avg. Order Value" amount="$42.70" />
          <MiniCard label="Conversion Rate" amount="3.8%" />

          <div className="bg-white p-3 rounded-md shadow-sm border">
            <div className="text-sm text-slate-500">Server Status</div>
            <div className="mt-2 text-green-600 font-medium">
              All systems operational
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}