// src/pages/Users.jsx
import React from 'react';
import Table from '../components/Table';

function EditIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>;
}

function TrashIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>;
}

const data = [
  { id: 'U001', name: 'Asha Rana', email: 'asha@example.com', role: 'Admin', status: 'Active' },
  { id: 'U002', name: 'Bikash Koirala', email: 'bikash@example.com', role: 'Editor', status: 'Invited' },
  { id: 'U003', name: 'Chandra Gurung', email: 'chandra@example.com', role: 'Viewer', status: 'Active' },
  { id: 'U004', name: 'Deepa Shahi', email: 'deepa@example.com', role: 'Editor', status: 'Suspended' }
];

const columns = [
  { title: 'ID', key: 'id' },
  { title: 'Name', key: 'name', render: (r) => <div className="flex items-center gap-3"><div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-sm">{r.name[0]}</div><div>{r.name}</div></div> },
  { title: 'Email', key: 'email' },
  { title: 'Role', key: 'role' },
  { title: 'Status', key: 'status', render: (r) => <span className={`px-2 py-1 rounded-full text-xs ${r.status === 'Active' ? 'bg-green-100 text-green-700' : r.status === 'Invited' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{r.status}</span> },
  { title: 'Actions', key: 'actions', render: (r) => <div className="flex items-center gap-2"><button className="p-2 rounded-md hover:bg-slate-100"><EditIcon /></button><button className="p-2 rounded-md hover:bg-slate-100 text-red-600"><TrashIcon /></button></div> }
];

export default function Users() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Users</h2>
        <div className="flex items-center gap-2">
          <input className="px-3 py-2 rounded-md border" placeholder="Search users..." />
          <button className="px-4 py-2 bg-primary text-white rounded-md">Invite</button>
        </div>
      </div>

      <Table columns={columns} data={data} />
    </div>
  );
}