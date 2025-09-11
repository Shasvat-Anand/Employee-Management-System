import React from 'react'
import Header from '../../other/header'
import TaskListnumber from '../../other/TaskListnumber'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header data={data}/>
        <TaskListnumber data={data} />
        <Tasklist data={data} />
    </div>
  )
}

export default EmployeeDashboard