import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import deleteBtn from '../Images/trash-bin.png'
import { useNoteContext } from "../hooks/useNoteContext";

const deleteNote = (id) => {
    
    fetch(`/notes/${id}`, {
        method: 'DELETE',
    })
    .then((response) => {
        if (response.ok) {
            return response.json()
        }
    })
    .then((data) => {
        console.log(data)
    })
}

export default function Note(props) {

    const {state,dispatch} = useNoteContext()

    const handleDelete = (id) => {
        deleteNote(id);
        dispatch({type: 'DELETE_NOTE', payload: { _id: id }})
        setIsOpen(!isOpen);
    }
    
    const truncateText = (text, limit) => {
        const words = text.split(' ');
        return words.length > limit ? words.slice(0, limit).join(' ') + ' ...' : text;
    };
    
    const formatDateTime = (isoString) => {
        const date = new Date(isoString);
        
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(2);
        
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        const formattedDate = `${day}/${month}/${year}`
        const formattedTime = `${hours}:${minutes}`
        
        return [formattedDate, formattedTime];
    }
    
    const [isOpen, setIsOpen] = useState(false);
    
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="bg-white flex-col w-[300px] h-[300px] rounded-xl py-3 px-6 hover:border-2 border-blue-200 select-none overflow-hidden relative">
                <Link className="hover:cursor-pointer" to={`${props.id}`}>
                    <p className="text-4xl mb-3 font-maname">{props.title}</p>
                    <p className="text-[12px] italic text-gray-400">{formatDateTime(props.date)[0]} &#8226; {formatDateTime(props.date)[1]}</p>
                    <p className="text-lg leading-snug mt-2 font-cairo overflow-hidden">
                        {truncateText(props.desc, 30)}
                    </p>
                </Link>
                <button onClick={togglePopup} className="flex justify-end space-x-3 absolute right-3 bottom-3">
                    <img src={deleteBtn} className='w-8 hover:opacity-60 ease-in-out active:opacity-100 opacity-90' alt='Delete' />
                </button>
            </div>

                {isOpen && (
                    <div className="fixed z-50 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                        <div className="bg-white rounded-lg px-8 py-[40px] relative">
                            <button className="absolute bg-transparent text-gray-500 hover:text-gray-700 active:text-gray-900 focus:outline-none top-[15px] right-[15px] rounded-full p-1 hover:bg-gray-200 active:bg-gray-300" onClick={togglePopup}>
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="flex flex-col items-center mt-4">
                                <p className="text-black text-2xl select-none">This note will be deleted permanently</p>
                                <button className="mt-4 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white py-2 px-4 rounded" onClick={() => handleDelete(props.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}