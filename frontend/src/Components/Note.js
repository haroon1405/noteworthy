import React,{useState} from "react";
import { Link } from "react-router-dom";
import deleteBtn from '../Images/trash-bin.png'

export default function Note(){

    const truncateText = (text, limit) => {
        const words = text.split(' ');
        return words.length > limit ? words.slice(0, limit).join(' ') + ' ...' : text;
      };

      const [isOpen, setIsOpen] = useState(false);

      const togglePopup = () => {
        setIsOpen(!isOpen);
      };
      
    return (
        <>
            <div className="bg-white flex-col w-[300px] h-[300px] rounded-xl py-3 px-6 hover:border-2 border-blue-200 select-none hover:cursor-pointer overflow-hidden relative">
            <Link to="/details">
                <p className="text-4xl mb-3 font-maname">Trip to Saudi</p>
                <p className="text-[12px] italic text-gray-400">12/03/23 &#8226; 09:34</p>
                <p className="text-lg leading-snug mt-2 font-cairo overflow-hidden">
                    {truncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 30)}
                </p>
            </Link>
                <button onClick={togglePopup} className="flex justify-end space-x-3 absolute right-3 bottom-3">
                    <img src={deleteBtn} className='w-8 hover:opacity-60 ease-in-out active:opacity-100 opacity-90' alt='Delete'/>
                </button>

                {isOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg px-8 py-[40px] relative">
                <button className="absolute bg-transparent text-gray-500 hover:text-gray-700 active:text-gray-900 focus:outline-none top-[15px] right-[15px] rounded-full p-1 hover:bg-gray-200 active:bg-gray-300" onClick={togglePopup}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
                <div className="flex flex-col items-center mt-4">
                    <p className="text-black text-2xl select-none">This note will be deleted permanently</p>
                    <button className="mt-4 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white py-2 px-4 rounded" onClick={togglePopup}>
                    Delete
                    </button>
                </div>
          </div>
        </div>
      )}
            </div>
        </>
    )
}