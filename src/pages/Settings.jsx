import React, { useEffect, useState } from "react";

export default function Settings() {
  // default profile
  const defaultProfile = {
    name: "Sandhya Shrestha",
    email: "sandhya@example.com",
    password: "",
  };

  // states
  const [formData, setFormData] = useState(defaultProfile);
  const [showActivity, setShowActivity] = useState(false);
  const [lastLogin, setLastLogin] = useState("");

  // LOAD saved profile + login time
  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      setFormData(JSON.parse(savedProfile));
    }

    const savedLogin = localStorage.getItem("lastLogin");
    if (savedLogin) {
      setLastLogin(savedLogin);
    }
  }, []);

  // SET login time (ONLY ONCE per session load)
  useEffect(() => {
    const now = new Date().toLocaleString();
    localStorage.setItem("lastLogin", now);
    setLastLogin(now);
  }, []);

  // input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SAVE CHANGES
  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(formData));
    alert("Profile updated successfully ✅");
  };

  // CANCEL (reset)
  const handleCancel = () => {
    const saved = localStorage.getItem("profile");

    if (saved) {
      setFormData(JSON.parse(saved));
    } else {
      setFormData(defaultProfile);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* LEFT SIDE - FORM */}
      <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border dark:border-slate-700 p-6">

        <h3 className="text-lg font-semibold dark:text-white">
          Account Settings
        </h3>

        <div className="mt-4 space-y-4">

          {/* NAME */}
          <div>
            <label className="text-sm text-slate-600 dark:text-slate-300">
              Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-slate-600 dark:text-slate-300">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md"
            />
          </div>

         
          {/* PASSWORD
          <div>
            <label className="text-sm text-slate-600 dark:text-slate-300">
              Password
          </label>

        <div className="relative mt-1">
          <input
             type={showPassword ? "text" : "password"}
             name="password"
             value={formData.password}
             onChange={handleChange}
             placeholder="Enter new password"
            className="w-full px-3 py-2 border dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-md"
           />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-2 text-sm text-blue-600"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
    </div>
  </div>*/}



            {/* PASSWORD */} <div> <label className="text-sm text-slate-600 dark:text-slate-300">
               Password 
                </label> <input type="password" name="password" value={formData.password} onChange={handleChange} 
                    placeholder="Enter new password" className="w-full mt-1 px-3 py-2 border dark:border-slate-600
                     dark:bg-slate-900 dark:text-white rounded-md" />
                      </div>


          {/* BUTTONS */}
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Save Changes
            </button>

            <button
              onClick={handleCancel}
              className="px-4 py-2 border dark:border-slate-600 dark:text-white rounded-md"
            >
              Cancel
            </button>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE - INFO */}
      <div className="space-y-6">

        {/* ACCOUNT INFO */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border dark:border-slate-700 p-6">

          <h3 className="text-lg font-semibold dark:text-white">
            Account Overview
          </h3>

          <div className="mt-4 space-y-3 text-sm">

            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-300">Status</span>
              <span className="text-green-600 font-medium">Active</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-300">Role</span>
              <span className="dark:text-white font-medium">User</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-300">Last Login</span>
              <span className="dark:text-white font-medium">
                {lastLogin}
              </span>
            </div>

          </div>

          {/* BUTTON */}
          <button
            onClick={() => setShowActivity(!showActivity)}
            className="mt-5 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            {showActivity ? "Hide Activity Log" : "View Activity Log"}
          </button>

          {/* ACTIVITY */}
          {showActivity && (
            <div className="mt-4 space-y-2 text-sm">

              <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-md">
                🔐 Logged in at {lastLogin}
              </div>

              <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-md">
                ✏️ Profile updated
              </div>

              <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-md">
                📧 Email change saved
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}