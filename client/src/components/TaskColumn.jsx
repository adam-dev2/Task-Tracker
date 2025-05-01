import React from 'react'

const TaskColumn = ({ title, tasks }) => {
  return (
    <div className='bg-zinc-800 p-6 rounded-lg'>
      <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
      {tasks.length === 0 ? (
        <p className='text-gray-400'>No tasks {title.toLowerCase()}.</p>
      ) : (
        tasks.map((task, idx) => (
          <div key={idx} className='bg-zinc-700 p-4 mb-3 rounded-lg'>
            <p>{task}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default TaskColumn
