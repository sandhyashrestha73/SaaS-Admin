import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#1e293b] p-5 flex justify-between items-center border-b border-slate-700'>

      <h2 className='text-2xl font-semibold'>
        Dashboard
      </h2>

      <div className='flex items-center gap-4'>

        <input
          type="text"
          placeholder='Search...'
          className='bg-slate-800 px-4 py-2 rounded-lg outline-none'
        />

        <div className='w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold'>
          S
        </div>

      </div>

    </div>
  )
}

export default Navbar