import React, { useState, useEffect } from "react";
import Table from "../components/Table";

const initialData = [
  { id: "U001", name: "Asha Rana", email: "asha@example.com", role: "Admin", status: "Active" },
  { id: "U002", name: "Bikash Koirala", email: "bikash@example.com", role: "Editor", status: "Invited" },
  { id: "U003", name: "Chandra Gurung", email: "chandra@example.com", role: "Viewer", status: "Active" },
  { id: "U004", name: "Deepa Shahi", email: "deepa@example.com", role: "Editor", status: "Suspended" }
];

export default function Users() {

  // LOAD FROM LOCALSTORAGE
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : initialData;
  });

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    role: "Viewer",
    status: "Active",
  });

  // SAVE TO LOCALSTORAGE EVERY TIME USERS CHANGE
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // SEARCH FILTER
  const filteredData = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.role.toLowerCase().includes(search.toLowerCase())
  );

  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ADD OR UPDATE USER
  const handleSaveUser = () => {
    if (formData.name === "" || formData.email === "") return;

    if (formData.id) {
      // UPDATE USER
      const updated = users.map((u) =>
        u.id === formData.id ? formData : u
      );
      setUsers(updated);
    } else {
      // ADD USER
      const newUser = {
        ...formData,
        id: "U" + Date.now(),
      };
      setUsers([...users, newUser]);
    }

    setShowForm(false);
    setFormData({
      id: "",
      name: "",
      email: "",
      role: "Viewer",
      status: "Active",
    });
  };

  // DELETE USER
  const handleDelete = (id) => {
    const updated = users.filter((user) => user.id !== id);
    setUsers(updated);
  };

  // EDIT USER
  const handleEdit = (user) => {
    setFormData(user);
    setShowForm(true);
  };

  const columns = [
    { title: "ID", key: "id" },

    {
      title: "Name",
      key: "name",
      render: (r) => (
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-sm">
            {r.name[0]}
          </div>
          <div>{r.name}</div>
        </div>
      ),
    },

    { title: "Email", key: "email" },
    { title: "Role", key: "role" },

    {
      title: "Status",
      key: "status",
      render: (r) => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            r.status === "Active"
              ? "bg-green-100 text-green-700"
              : r.status === "Invited"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {r.status}
        </span>
      ),
    },

    {
      title: "Actions",
      key: "actions",
      render: (r) => (
        <div className="flex items-center gap-2">

          <button
            onClick={() => handleEdit(r)}
            className="px-2 py-1 rounded-md hover:bg-slate-100 text-blue-600"
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(r.id)}
            className="px-2 py-1 rounded-md hover:bg-red-100 text-red-600"
          >
            Delete
          </button>

        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold">Users</h2>

        <div className="flex items-center gap-2">

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 rounded-md border"
            placeholder="Search users..."
          />

          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            + Add User
          </button>

        </div>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="p-4 border rounded-md bg-white space-y-2">

          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full"
          />

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full"
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option>Active</option>
            <option>Invited</option>
            <option>Suspended</option>
          </select>

          <div className="flex gap-2">

            <button
              onClick={handleSaveUser}
              className="bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Save User
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="border px-4 py-2 rounded-md"
            >
              Cancel
            </button>

          </div>
        </div>
      )}

      {/* TABLE */}
      <Table columns={columns} data={filteredData} />

    </div>
  );
}