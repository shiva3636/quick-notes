import React from 'react'
import LogoContainer from '../components/Logo'

function Header() {
    return (
        <div className='mr-[6rem] h-h-4.5  border-bgSidebar flex align-centyer fixed justify-start w-full bg-white/30 backdrop-blur-md shadow-md z-50'>
            <LogoContainer />
            <h1 className="text-3xl font-bold ms-0 m-4">
                Quick Notes
            </h1>
        </div>
    )
}

export default Header