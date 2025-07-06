import React from 'react'
import LogoContainer from '../components/Logo'

function LeftSidebar() {
  return (
    <div className='min-w-24 mt-[4rem] justify-items-center bg-bgSidebar mr-[6rem] fixed h-full z-100'>
       
       
      <div>
       <ul> {[1,2,3,4].map(item => {
          return <li>Item</li>
        })}
        </ul>
      </div>
    </div>
  )
}

export default LeftSidebar