import React from 'react'
import NoteCard from './NoteCard'
import AddButton from '../components/Buttons/Button'
import AddNote from './AddNote'
import { useModal } from '../hooks/useModal'
import data from '../utils/Data.json';

function NotesGrid(props) {

    const {setIsOpen,isOpen, setTitle, title = "Add Note", ...rest } = useModal()
   const handleModal = () => {
        setTitle("Add Note")
        setIsOpen(true)
    }
    return (
        <div style={{ marginTop: '5rem' }}>
            <AddButton onClick={handleModal} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 m-4">
                {data.notes.map((note) => (
                    <NoteCard key={note.title} note={note} />
                ))}

            </div>
            <AddNote
            setIsOpen={setIsOpen}
            isOpen={isOpen || false}
            title={title}
             {...rest} />
        </div>

    )
}

export default NotesGrid