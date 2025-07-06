import React from 'react'
import NoteCard from './NoteCard'
import Header from './Header'
import LeftSidebar from './LeftSidebar'
import Footer from './Footer'
import Modal from '../Modals/Modal'
import Dropdown from '../Modals/Dropdown'
import NotesGrid from './NoteContainer'

function QuickNotes() {
    return (

        <div className="flex min-h-screen">
            <Header />
           
            <div className="flex flex-col flex-grow">
                 {/* <LeftSidebar /> */}

                <NotesGrid />
                
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default QuickNotes