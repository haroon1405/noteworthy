import React,{useState} from "react";
import { Link } from "react-router-dom";
import deleteBtn from '../Images/trash-bin.png'
import editBtn from '../Images/pen.png'

export default function Details(){

    const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
      
    return (
        <>
            <Link to="/" className="bg-blue-100 inline-block hover:bg-blue-400 transition duration-100 ease-in-out mt-5 ml-5 text-black hover:text-white active:bg-blue-500 focus:outline-none rounded-full p-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
            </Link>
            <div className="bg-white flex-col mt-5 mx-9 rounded-xl py-3 px-6 relative">
                <div className="flex justify-end space-x-5 absolute right-5 top-5">
                    <img src={editBtn} className='w-11 hover:opacity-60 ease-in-out active:opacity-100 opacity-90' alt='Edit'/>
                    <img src={deleteBtn} onClick={togglePopup} className='w-11 hover:opacity-60 ease-in-out active:opacity-100 opacity-90' alt='Delete'/>
                </div>
                <p className="text-4xl mb-3 font-maname">Trip to Saudi</p>
                <p className="text-[12px] italic text-gray-400">12/03/23 &#8226; 09:34</p>
                <p className="text-lg leading-snug mb-6 mt-2 font-cairo overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat conse.
                </p>
            </div>
            {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white rounded-lg p-8 relative">
                    <button className="absolute bg-transparent text-gray-500 hover:text-gray-700 active:text-gray-900 focus:outline-none top-[15px] right-[15px] rounded-full p-1 hover:bg-gray-200 active:bg-gray-300" onClick={togglePopup}>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                    <div className="flex flex-col items-center mt-4">
                        <p className="text-black text-2xl select-none">Are you sure you want to delete?</p>
                        <button className="mt-4 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white py-2 px-4 rounded" onClick={togglePopup}>
                        Delete
                        </button>
                    </div>
              </div>
            </div>
            )}
        </>
    )
}