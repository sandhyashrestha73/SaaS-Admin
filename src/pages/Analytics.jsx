import React from 'react'

const Analytics = () => {
  return (
    <div>

      <h1 className='text-4xl font-bold mb-8'>
        Analytics
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

        <div className='bg-[#1e293b] p-6 rounded-2xl'>
          <h2 className='text-xl mb-4'>
            Total Revenue
          </h2>

          <p className='text-4xl text-cyan-400 font-bold'>
            $24,000
          </p>
        </div>

        <div className='bg-[#1e293b] p-6 rounded-2xl'>
          <h2 className='text-xl mb-4'>
            Monthly Users
          </h2>

          <p className='text-4xl text-cyan-400 font-bold'>
            12K
          </p>
        </div>

        <div className='bg-[#1e293b] p-6 rounded-2xl'>
          <h2 className='text-xl mb-4'>
            Growth
          </h2>

          <p className='text-4xl text-cyan-400 font-bold'>
            +18%
          </p>
        </div>

      </div>

      {/* Fake Chart */}
      <div className='bg-[#1e293b] mt-10 p-10 rounded-2xl h-80 flex items-center justify-center text-slate-400 text-2xl'>
        Chart Section
      </div>

    </div>
  )
}

export default Analytics