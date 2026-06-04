import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js';

import { StatCard } from '../components/Cards';

// ✅ IMPORTANT: register chart components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

// Icons
function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );
}

export default function Analytics() {
  const doughnutData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        data: [55, 35, 10],
        backgroundColor: ['#6366F1', '#06B6D4', '#F59E0B']
      }
    ]
  };

  const barData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 15000, 14000, 18000],
        backgroundColor: '#06B6D4'
      }
    ]
  };

  return (
    <div className="space-y-6 p-4">

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Users" value="24,321" delta="+6.1% MoM" icon={<UsersIcon />} />
        <StatCard title="Revenue" value="$241,230" delta="+9.8% MoM" icon={<DollarIcon />} />

        {/* Doughnut */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm text-gray-500">Platform Mix</h3>
          <div className="h-40">
            <Doughnut
              data={doughnutData}
              options={{
                plugins: { legend: { position: 'bottom' } },
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>

        {/* Bar */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm text-gray-500">Revenue by Week</h3>
          <div className="h-40">
            <Bar
              data={barData}
              options={{
                plugins: { legend: { display: false } },
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <div className="lg:col-span-2 bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Detailed Analytics</h2>
          <p className="text-sm text-gray-500">
            Funnels, cohorts, and conversion rates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
            <div className="border p-3 rounded">
              <p className="text-sm text-gray-500">New Signups</p>
              <p className="text-xl font-bold">4,213</p>
            </div>

            <div className="border p-3 rounded">
              <p className="text-sm text-gray-500">Churn</p>
              <p className="text-xl font-bold">2.1%</p>
            </div>

            <div className="border p-3 rounded">
              <p className="text-sm text-gray-500">ARPU</p>
              <p className="text-xl font-bold">$12.4</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Top Channels</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex justify-between"><span>Organic</span><span>54%</span></li>
            <li className="flex justify-between"><span>Paid</span><span>28%</span></li>
            <li className="flex justify-between"><span>Referral</span><span>18%</span></li>
          </ul>
        </div>

        <div className="bg-purple-100 p-4 w-40 rounded mt-4">
          <h3 className="font-bold">AI Insight</h3>
          <p>
             Revenue is growing steadily. Mobile users are increasing faster than desktop.
          </p>
        </div>

      </div>

    </div>
  );
}