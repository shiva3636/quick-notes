import React, { useState } from 'react'
import Label from '../components/Label'
import { HiOutlinePaperClip } from "react-icons/hi";
import IconWrapper from '../components/IconWrapper';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdShare } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import Dropdown from '../Modals/Dropdown';
function NoteCard() {
    const [isOpen, setIsOpen] = useState(false);
    const options = [
        {
            label: 'Edit',
            onClick: () => {
                console.log('Edit clicked')
                setIsOpen(false)
            }
        },
        {
            label: 'Delete',
            onClick: () => {
                console.log('Delete clicked')
                setIsOpen(false)
            }
        },
        {
            label: 'Archive',
            onClick: () => {
                console.log('Archive clicked')
                setIsOpen(false)
            }
        },
    ];

    return (
        <div className="note-card border px-4 pt-4 pb-2 shadow-lg bg-white border-l-indigo-500 border-l-4 rounded-sm">
            <div className='flex justify-between items-center mb-2'>
                <p className="text-lg font-semibold text-black">Note Title</p>
                <div className='flex'>
                    <IconWrapper w={8} h={8}>
                        <IoMdNotifications size={18} />
                    </IconWrapper>
                    <IconWrapper w={8} h={8} >
                        <IoMdShare size={18} />
                    </IconWrapper>

                    <IconWrapper w={8} h={8} >

                        <BsThreeDotsVertical size={18}
                            onClick={() => setIsOpen(true)} />
                        {isOpen && <Dropdown
                            options={options}
                        />}

                    </IconWrapper>

                </div>
            </div>

            <p className="font-small text-gray-500">This is a sample note content. You can edit this text to add your own notes.</p>
            <div className='flex flex-wrap gap-2 mt-2'>
                <Label color="#ffff0070" />
                <Label color="#0000ff69" />
                <Label color="#ffa5007a" />
            </div>
            <div className="flex justify-between items-center mt-6">
                <p className="text-xs text-gray-400">Created on: 2023-10-01</p>
                <IconWrapper Blue>
                    <HiOutlinePaperClip size={18} />
                </IconWrapper>


            </div>
        </div>
    )
}

export default NoteCard