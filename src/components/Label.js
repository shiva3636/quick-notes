import React from 'react'

function Label({color}) {
  return (
    <div style={{background:color}} className='bg-slate-100 px-3 py-1 mx-1  text-xs font-semibold text-slate-700 ...'>
        <p>Work</p>
    </div>
  )
}

export default Label