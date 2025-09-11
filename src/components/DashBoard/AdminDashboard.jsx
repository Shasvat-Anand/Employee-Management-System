import React from 'react'
import Header from '../../other/header'
import CreateTask from '../../other/createtask'
import Alltask from '../../other/Alltask'

const AdminDashboard = ({data}) => {
  return (
    <div className='h-screen p-10 w-full '>
        <Header data={data}/>

        <CreateTask  data ={data}/>
        <Alltask  data = {data}/>

    </div>
  )
}

export default AdminDashboard