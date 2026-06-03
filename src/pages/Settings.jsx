
import React, { useState } from 'react'

const Settings = () => {

  const [name, setName] = useState("Sandhya")

  return (
    <div>

      <h1 className='text-4xl font-bold mb-8'>
        Settings
      </h1>

      <div className='bg-[#1e293b] p-8 rounded-2xl max-w-xl'>

        <label className='block mb-2'>
          Name
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full p-3 rounded-lg bg-slate-800 outline-none mb-6'
        />

        <label className='block mb-2'>
          Password
        </label>

        <input
          type="password"
          placeholder='Enter password'
          className='w-full p-3 rounded-lg bg-slate-800 outline-none mb-6'
        />

        <button className='bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold'>
          Save Changes
        </button>

      </div>

    </div>
  )
}

export default Settings