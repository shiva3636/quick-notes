import React from 'react'

function IconWrapper(props) {
   const {Blue} =  props
    return (
        <div className={`flex items-center justify-center w-${props.w || 8} h-${props.w || 8} 
            ${Blue ? 'text-blue-600 w-[2rem] h-[2rem]' : 'text-black-600 w-[1.5rem] h-[1.5rem]'}
            rounded-full 
            hover:bg-blue-100
            hover:scale-105
            transition-all 
            duration-200 
            cursor-pointer`}>
            <i className="fas fa-check">
                {props.children}
            </i>
        </div>
    )
}

export default IconWrapper