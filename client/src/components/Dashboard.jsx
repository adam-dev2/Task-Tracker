import React, { useState } from 'react'
import TaskColumn from './TaskColumn'

const Dashboard = () => {
  const [tasks, setTasks] = useState({
    pending: ['Task 1', 'Task 2'],
    ongoing: ['Task 3'],
    completed: ['Task 4', 'Task 5']
  })

  return (
    <div className='h-full w-full bg-zinc-900 text-white p-12'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-semibold'>Welcome Rat</h1>
        <button className='cursor-pointer text-lg border-2 border-indigo-600 p-3 rounded-xl hover:text-gray-400'>Logout</button>
      </div>
      <div className='border-b-2 mt-7 pb-5 border-zinc-500'>
        <h1 className='text-7xl font-bold '>Project 1</h1>
      </div>

      <div className='grid grid-cols-3 gap-6 mt-7'>
        <TaskColumn title="Pending" tasks={tasks.pending} />
        <TaskColumn title="Ongoing" tasks={tasks.ongoing} />
        <TaskColumn title="Completed" tasks={tasks.completed} />
      </div>
    </div>
  )
}

export default Dashboard
