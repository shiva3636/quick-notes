import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import React from 'react'
import { RiCloseFill } from "react-icons/ri";

function Modal(props) {
  console.log(props,"modal props")
  return (
    <div >
      <Dialog open={props?.isOpen} onClose={props?.onClose} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full  justify-center p-4  sm:p-0">
            <DialogPanel
              style={{
                width: props?.width || "60%",
                minWidth: props?.width || "60%",
                height: "fit-content",
                marginTop:"7rem"
              }}
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="flex align-center justify-between bg-white px-2 pt-3 pb-4 sm:p-3 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    {props?.title || "Modal"}
                  </DialogTitle>
                </div>
                <div className='cursor-pointer' onClick={props?.onClose}>
                  <RiCloseFill size={20} />
                </div>
              </div>

              <div className='px-3 py-2'>
                <div className="mt-2">
                 {props?.children}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

    </div>

  )
}

export default Modal