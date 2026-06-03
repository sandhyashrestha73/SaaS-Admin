import React from 'react'

const Users = () => {

  const users = [
    {
      name: "Sandhya",
      email: "sandhya@gmail.com",
      status: "Active"
    },
    {
      name: "Alex",
      email: "alex@gmail.com",
      status: "Offline"
    }
  ]

  return (
    <div>

      <h1 className='text-4xl font-bold mb-8'>
        Users
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

        {
          users.map((user, index) => (

            <div
              key={index}
              className='bg-[#1e293b] p-5 rounded-2xl'
            >

              <div className='flex items-center gap-4'>

                <div className='w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold'>
                  {user.name[0]}
                </div>

                <div>
                  <h2 className='text-xl font-semibold'>
                    {user.name}
                  </h2>

                  <p className='text-slate-400'>
                    {user.email}
                  </p>
                </div>

              </div>

              <button className='mt-5 bg-cyan-500 text-black px-4 py-2 rounded-lg'>
                {user.status}
              </button>

            </div>

          ))
        }

      </div>

    </div>
  )
}

export default Users