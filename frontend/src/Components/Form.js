import React, { useState } from 'react';

export default function Form(){
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center">
        <button onClick={togglePopup} className="fixed bottom-5 right-5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer active:bg-blue-700 text-white rounded-full p-3 shadow-lg flex items-center justify-center">
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
            </svg>
        </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg p-8 relative">
                <button className="absolute bg-transparent text-gray-500 hover:text-gray-700 active:text-gray-900 focus:outline-none top-[15px] right-[15px] rounded-full p-1 hover:bg-gray-200 active:bg-gray-300" onClick={togglePopup}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
                <h2 className="text-lg font-semibold mb-4">Popup Box Title</h2>
                <p className="text-gray-700">Popup box content goes here...</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={togglePopup}>
                  Add Note
                </button>
          </div>
        </div>
      )}
    </div>
  );
};
