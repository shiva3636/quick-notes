import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { FiPlusCircle } from "react-icons/fi";
export function AddButton({onClick}) {
    return (
        <button onClick={onClick} style={{ boxShadow: "0 0 6px rgba(128, 128, 128, 0.4)" }}
        className="fixed bottom-6 right-8 flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <span className="flex items-center justify-center  text-gray-700 text-sm font-bold"><FiPlusCircle size={18} /></span>
            <span className="text-sm font-medium text-gray-800">Add Notes</span>
        </button>

    )
}

export default AddButton