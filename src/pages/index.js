import React from 'react'
import NoteCard from './NoteCard'
import Header from './Header'
import LeftSidebar from './LeftSidebar'
import Footer from './Footer'
import Modal from '../Modals/Modal'
import Dropdown from '../Modals/Dropdown'

function QuickNotes() {
    return (

        <div className="flex min-h-screen">
            <LeftSidebar />
            <div className="flex flex-col flex-grow">
                <Header />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 m-4">
               {
                [1, 2, 3, 4].map((note) => (
                    <NoteCard key={note} />
                ))
               }
               
               </div>
               <Dropdown></Dropdown>
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default QuickNotes