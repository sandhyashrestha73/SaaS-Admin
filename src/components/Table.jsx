// src/components/Table.jsx
import React from 'react';

export default function Table({ columns, data }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-x-auto">
      <table className="min-w-full divide-y">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 text-left text-sm font-medium text-slate-600">
                {col.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y">
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-slate-50 transition">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-sm text-slate-700">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}