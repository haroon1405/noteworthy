import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import deleteBtn from '../Images/trash-bin.png';
import editBtn from '../Images/pen.png';
import { useNoteContext } from "../hooks/useNoteContext";

const deleteNote = (id) => {
    fetch(`/notes/${id}`, {
        method: 'DELETE',
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((data) => {
        // console.log(data);
    });
};

export default function Details() {
    const { state, dispatch } = useNoteContext();
    const navigate = useNavigate();
    const { id } = useParams();
    const [deleteIsOpen, setDeleteIsOpen] = useState(false);
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [noteDetails, setNoteDetails] = useState({ noteTitle: "", noteDesc: "", noteTime: "" });
    const [formData, setFormData] = useState({ formTitle: "", formDesc: "" });

    const handleDelete = (id) => {
        deleteNote(id);
        dispatch({ type: 'DELETE_NOTE', payload: { _id: id } });
        navigate("/");
    };

    const formatDateTime = (isoString) => {
        const date = new Date(isoString);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(2);

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        const formattedDate = `${day}/${month}/${year}`;
        const formattedTime = `${hours}:${minutes}`;

        return [formattedDate, formattedTime];
    };

    useEffect(() => {
        fetch(`/notes/${id}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            setNoteDetails({
                noteTitle: data.title,
                noteDesc: data.desc,
                noteTime: data.updatedAt,
            });
        })
        .catch((error) => {
            // console.log(error);
        });
    }, [id,formIsOpen]);

    useEffect(() => {
        setFormData({
            formTitle: noteDetails.noteTitle,
            formDesc: noteDetails.noteDesc,
        });
    }, [noteDetails]);

    const handleChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    };

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch(`/notes/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();

        if (!response.ok) {
            // console.log(json);
        }

        if (response.ok) {
            dispatch({ type: 'UPDATE_NOTE', payload: json });
            setFormIsOpen(false);
        }
    }

    const toggleDeletePopup = () => {
        setDeleteIsOpen(!deleteIsOpen);
    };

    const toggleFormPopup = () => {
        setFormIsOpen(!formIsOpen);
    };

    return (
        <>
            <Link to="/" className="bg-blue-100 inline-block hover:bg-blue-400 transition duration-100 ease-in-out mt-5 ml-5 text-black hover:text-white active:bg-blue-500 focus:outline-none rounded-full p-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
            </Link>

            <div className="bg-white animate-slide-large flex-col mt-5 mx-9 rounded-xl py-3 px-4 sm:px-6 sm:relative">
                <p className="text-4xl mb-3 font-maname">{noteDetails.noteTitle}</p>
                <p className="text-[12px] italic text-gray-400">{formatDateTime(noteDetails.noteTime)[0]} &#8226; {formatDateTime(noteDetails.noteTime)[1]}</p>
                <p className="text-lg leading-snug mb-6 mt-2 font-cairo overflow-hidden">
                    {noteDetails.noteDesc}
                </p>
                <div className="flex justify-end space-x-3 sm:space-x-5 sm:absolute sm:right-5 sm:top-5">
                    <img src={editBtn} onClick={toggleFormPopup} className='w-8 sm:w-11 hover:opacity-60 ease-in-out active:opacity-100 opacity-90' alt='Edit'/>
                    <img src={deleteBtn} onClick={toggleDeletePopup} className='w-8 sm:w-11 hover:opacity-60 ease-in-out active:opacity-100 opacity-90' alt='Delete'/>
                </div>
            </div>

            {formIsOpen && (
                <div className="fixed inset-0 animate-fade-in flex-col flex items-center justify-end pb-[70px] sm:pb-0 sm:justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg p-8 relative w-80 sm:w-[750px]">
                        <button className="absolute bg-transparent text-gray-500 hover:text-gray-700 active:text-gray-900 focus:outline-none top-[15px] right-[15px] rounded-full p-1 hover:bg-gray-200 active:bg-gray-300" onClick={toggleFormPopup}>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <form className='flex flex-col' onSubmit={handleSubmit}>
                            <input type="text" className="outline-none border-gray-200 border-2 mb-2 py-2 mt-5 rounded-lg px-2 hover:border-gray-400 text-gray-700" onChange={handleChange} name="formTitle" value={formData.formTitle} />
                            <textarea className="outline-none border-gray-200 border-2 mb-2 h-[200px] py-2 rounded-lg px-2 hover:border-gray-400 text-gray-700" onChange={handleChange} name="formDesc" value={formData.formDesc} />
                            <button className="mt-4 mx-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                Update Note
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {deleteIsOpen && (
                <div className="fixed inset-0 flex animate-fade-in text-center items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg sm:px-8 px-1 w-80 py-[30px] sm:py-[40px] relative">
                        <button className="absolute bg-transparent text-gray-500 hover:text-gray-700 active:text-gray-900 focus:outline-none top-[15px] right-[15px] rounded-full p-1 hover:bg-gray-200 active:bg-gray-300" onClick={toggleDeletePopup}>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                        <div className="flex flex-col items-center mt-4">
                            <p className="text-black text-2xl select-none">Are you sure you want to delete?</p>
                            <button className="mt-4 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white py-2 px-4 rounded" onClick={() => handleDelete(id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}