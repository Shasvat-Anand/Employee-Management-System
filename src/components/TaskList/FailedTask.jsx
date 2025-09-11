import React from 'react'

const FailedTask = ({data}) => {
  return (
      <div className='h-full w-[300px] shrink-0 bg-yellow-400 p-5 rounded-2xl '>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-400 px-4 font-bold py-1 rounded '>{data.category}</h3>
          <h4 className='font-bold'>{data.date}</h4>
        </div>
        <h2 className='mt-5  text-2xl font-medium'>{data.title}</h2>
        <p className='mt-2 text-md'>

       {data.description}
        </p>
        <div className='mt-2'>
            <button className='w-full'>Failed Task</button>
        </div>

      </div>
  )
}

export default FailedTask