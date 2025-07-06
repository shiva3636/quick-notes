import React from 'react'
import Label from '../components/Label'
import { HiOutlinePaperClip } from "react-icons/hi";
import IconWrapper from '../components/IconWrapper';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdShare } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import Dropdown from '../Modals/Dropdown';
import useDropdown from '../hooks/useDropdown';
import { generateBgColor } from '../utils/methods';
function NoteCard({note}) {
    // const [isOpen, setIsOpen] = useState(false);
    const { dropdownRef, isOpen, position, openDropdown } = useDropdown();

    const options = [
        {
            label: 'Edit',
            onClick: (e) => {
                e.preventDefault()
                console.log('Edit clicked')
                // openDropdown()
            }
        },
        {
            label: 'Delete',
            onClick: (e) => {
                e.preventDefault()
                console.log('Delete clicked')
                // openDropdown()
            }
        },
        {
            label: 'Archive',
            onClick: (e) => {
                e.preventDefault()
                console.log('Archive clicked')
                // openDropdown()
            }
        },
    ];

    return (
        <div style={{backgroundColor: generateBgColor(note.borderColor, true) , borderLeftColor: note.borderColor}} className={`note-card border px-4 pt-4 pb-2 shadow-lg   border-l-4 rounded-sm flex-col justify-between`}>
        
            <div className='flex justify-between items-center mb-2'>
                <p className="text-lg font-semibold text-black">{note.title}</p>
                <div className='flex'>
                    <IconWrapper w={8} h={8}>
                        <IoMdNotifications size={18} />
                    </IconWrapper>
                    <IconWrapper w={8} h={8} >
                        <IoMdShare size={18} />
                    </IconWrapper>

                    <IconWrapper w={8} h={8} >

                        <BsThreeDotsVertical size={18}
                            onClick={openDropdown} />


                    </IconWrapper>
                    {isOpen && <Dropdown
                        dropdownRef={dropdownRef}
                        options={options}
                        position={position}
                    />}
                </div>
            </div>

            <p className="font-small text-gray-500">{note.content}</p>
            <div className='flex flex-wrap gap-2 mt-2'>
                {
                    note.tags.map(tag => {
                        return <Label tag={tag} />
                    })
                }
                
            </div>
            <div className="flex justify-between items-center mt-6">
                <p className="text-xs text-gray-400">Created on: {note.createdOn}</p>
                <IconWrapper Blue>
                    <HiOutlinePaperClip size={18} />
                </IconWrapper>


            </div>
        </div>
    )
}

export default NoteCard