import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidenavbar = () => {

  const [active, setActive] = useState("Dashboard")

  const menus = [
    {
      name: "Dashboard",
      path: "/",
      icon: "📊"
    },
    {
      name: "Users",
      path: "/users",
      icon: "👨‍💻"
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: "📈"
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "⚙️"
    }
  ]

  return (
    <div className='w-64 bg-[#1e293b] p-5'>

      <h1 className='text-3xl font-bold text-cyan-400 mb-10'>
        AI Workspace
      </h1>

      <div className='flex flex-col gap-3'>

        {
          menus.map((menu, index) => (

            <Link
              key={index}
              to={menu.path}
              onClick={() => setActive(menu.name)}
              className={`flex items-center gap-3 p-4 rounded-xl transition duration-300

                ${active === menu.name
                  ? "bg-cyan-500 text-black"
                  : "hover:bg-slate-700"
                }
              `}
            >

              <span>{menu.icon}</span>
              <span>{menu.name}</span>

            </Link>

          ))
        }

      </div>

    </div>
  )
}

export default Sidenavbar