import React from 'react'

function LogoContainer() {
  return (
    <div className='h-h-4.5 tw-4 flex justify-center items-center'>
    <div className='m-1 border-b-2 border-logoBorder flex content-center items-center top-3 left-0 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10'>
        <p className='text-sm p-1'>
            <img src="/assets/logo.png" alt="Logo" />
        </p>
    </div>
    </div>
  )
}

export default LogoContainer