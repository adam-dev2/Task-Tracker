import React from 'react'
// import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='h-screen w-72 bg-zinc-900 text-white p-6 flex flex-col gap-8 shadow-md border-r-2 border-zinc-500'>

      <div className='flex flex-col items-center gap-4 border-b border-zinc-700 pb-6'>
        <img
          src="./profile.jpg"
          alt="Profile"
          className='rounded-full h-20 w-20 ring-2 ring-indigo-500 shadow-md'
        />
        <h1 className='text-lg font-semibold'>Rat</h1>
        <div className='flex gap-2'>
          <button className='text-xs px-3 py-1 bg-indigo-600 hover:bg-indigo-700 rounded'>
            Edit
          </button>
          <button className='text-xs px-3 py-1 border border-zinc-500 hover:border-white rounded'>
            Profile
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-4 flex-grow'>
        <div className='flex items-center justify-between'>
          <h2 className='text-md font-semibold'>My Projects</h2>
          {/* <IoIosArrowDropdownCircle
            className='cursor-pointer text-indigo-400 hover:text-indigo-500'
            size={24}
          /> */}
        </div>

        <div className='flex flex-col gap-2 text-sm text-zinc-300'>
          {['project-1', 'project-2', 'project-3', 'project-4'].map((project, idx) => (
            <Link
              to={`/projects/${project}`}
              key={idx}
              className='px-3 py-2 rounded-md hover:bg-zinc-800 hover:text-white transition cursor-pointer'
            >
              {project.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
            </Link>
          ))}

        </div>

        <button className='mt-4 flex items-center gap-2 px-3 py-2 bg-indigo-700 hover:bg-indigo-800 rounded-md text-sm font-medium cursor-pointer'>
          <FaPlus size={14} />
          Add Project
        </button>
      </div>

      <div className='text-xs text-zinc-500 text-center'>
        v1.0.0 – TaskTracker
      </div>
    </div>
  );
};

export default Sidebar;
