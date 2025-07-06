import React, { useState } from 'react'
import Modal from '../Modals/Modal'
import { IoChevronDownCircleOutline } from 'react-icons/io5'
import { TbPhotoBitcoin } from 'react-icons/tb'
import { BiUserCircle } from 'react-icons/bi'
import RichTextEditor from '../components/Editor'
import TagManager from '../components/Tags'
import { Palette } from 'lucide-react'

// Get current date and time
const getCurrentDateTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  const time = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  return `${date} ● ${time}`;
};

function AddNote(props) {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('');
  const [customColor, setCustomColor] = useState('#8B5CF6');
  const [tags, setTags] = useState([]);

  const handleSubmit = () => {

  }


  return (
    <div>
      <Modal {...{ ...props, width: '45%' }}>
        <form>
          <div className="space-y-12">
            <div className="mt-2">
              <div className="flex items-center gap-2 mt-2">
                {/* Title Input */}
                <div class="relative w-full">
                  <input
                    type="text"
                    id="floatingInput"
                    placeholder=" "
                    onChange={(e) => { setTitle(e.target.value) }}
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  />
                  <label
                    for="floatingInput"
                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                    Note Title
                  </label>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <input
                        type="color"
                        value={customColor}
                        onChange={(e) => {
                          setCustomColor(e.target.value);
                        }}
                        className="w-10 h-10 rounded border-2 border-gray-300 cursor-pointer opacity-0 absolute inset-0"
                        title="Choose custom color"
                      />
                      <div
                        style={{ borderColor: customColor || "" }}
                        className="w-10 h-10 rounded border-2 border-gray-300 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                        <Palette color={customColor} size={22} className="text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-2'>
                <TagManager
                  tags={tags}
                  setTags={setTags}
                />
              </div>

              <div className="mt-2">
                <RichTextEditor
                  content={content}
                  setContent={setContent}
                />

              </div>
            </div>
          </div>

          <div className=" mt-2 mb-3 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              onClick={props?.onClose}
              className="inline-flex w-full justify-center rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-sky-500 sm:ml-3 sm:w-auto"
            >
              {props?.okTitle || "Okay"}
            </button>
            <button
              type="button"
              data-autofocus
              onClick={() => props?.setIsOpen(false)}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              {props?.cancelTitle || "Cancel"}
            </button>
          </div>
          <div className="text-xs text-gray-600 font-medium">
            {getCurrentDateTime()}
          </div>
        </form>



      </Modal>
    </div>
  )
}

export default AddNote