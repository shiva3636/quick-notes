import React from 'react'

function Label({tag}) {
  return (
    <div style={{background:tag.backgroundColor}} className='rounded-xs bg-slate-100 px-3 py-1 mx-1  text-xs font-semibold text-slate-700 ...'>
        <p>{tag.text}</p>
    </div>
  )
}

export default Label