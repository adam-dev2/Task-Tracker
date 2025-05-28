import React from 'react'

const Welcome = () => {
  return (
    <>
        <div className='text-white flex justify-center bg-zinc-900 h-screen'>
            <div className='p-4 flex flex-col items-center text-center justify-center '>
                <h1 className='text-5xl font-bold mb-4'>Welcome Dude!!</h1>
                <p className='text-md font-semibold'>How you doing</p>
                <p className='text-sm font-light opacity-60 mt-3 text-wrap max-w-full w-fit'>welcome back to check in  your projects it's been a long time to see u back</p>
            </div>
        </div>
    </>
  )
}

export default Welcome