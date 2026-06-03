import React, { useEffect, useState } from 'react'

const Dashboard = () => {

  const [data, setData] = useState([])

  useEffect(() => {

    const dashboardData = [
      {
        title: "Total Users",
        value: 1200
      },
      {
        title: "Revenue",
        value: "$24K"
      },
      {
        title: "Projects",
        value: 18
      },
      {
        title: "Tasks",
        value: 50
      }
    ]

    setData(dashboardData)

  }, [])

  return (
    <div>

      <h1 className='text-4xl font-bold mb-8'>
        Welcome Back 👋
      </h1>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

        {
          data.map((item, index) => (

            <div
              key={index}
              className='bg-[#1e293b] p-6 rounded-2xl shadow-lg hover:scale-105 transition'
            >

              <h2 className='text-slate-400 text-lg'>
                {item.title}
              </h2>

              <p className='text-4xl font-bold mt-4 text-cyan-400'>
                {item.value}
              </p>

            </div>

          ))
        }

      </div>

      {/* Recent Activity */}
      <div className='bg-[#1e293b] mt-10 p-6 rounded-2xl'>

        <h2 className='text-2xl font-semibold mb-6'>
          Recent Activity
        </h2>

        <div className='flex flex-col gap-4'>

          <div className='bg-slate-800 p-4 rounded-lg'>
            New user registered
          </div>

          <div className='bg-slate-800 p-4 rounded-lg'>
            Project uploaded successfully
          </div>

          <div className='bg-slate-800 p-4 rounded-lg'>
            Server performance updated
          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard