import React from 'react'

const createtask = () => {



  
  return (
     <div className=' bg-[#1c1c1c] mt-10 p-5 rounded-2xl'>
            <form className=' flex gap-50 items-start justify-between'>

                <div className='w-1/2'>
                <div>
                <h3>Task Title</h3>
                <input type="text" placeholder='Enter Task Title' className='w-full mt-2 mb-5 p-3 rounded-lg bg-[#2c2c2c] outline-none border border-amber-50 '/>
                </div>
                
                <div>
                <h3>Date</h3>
                <input type="date" className='w-full mt-2 mb-5 p-3 rounded-lg bg-[#2c2c2c] placeholder:text-gray-400  outline-none border border-amber-50  ' />
                </div>

                <div>
                <h3>Assign To</h3>
                <input type="text" placeholder='Employee Name' className='w-full mt-2 mb-5 p-3 rounded-lg bg-[#2c2c2c] outline-none  border border-amber-50 ' />
                </div>

                <div>
                <h3>Category</h3>
                <input type="text" placeholder='design,dev,etc.' className='w-full mt-2 mb-5 p-3 rounded-lg bg-[#2c2c2c] outline-none border border-amber-50  ' />
                </div>

                </div>

                
                <div className='w-1/2 '> 
                <h3>Task Description</h3>
                <textarea rows={10} placeholder='Enter Task Description' className='w-full mt-2 mb-5 p-3 rounded-lg bg-[#2c2c2c] outline-none border border-amber-50  '/>
                <button className='mt-5 px-6 py-3 w-full bg-emerald-500 rounded-lg'>Create Task</button>
                </div>

            </form>
        </div>
  )
}

export default createtask