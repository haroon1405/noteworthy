import React, { useState } from 'react';
import { useNoteContext } from "../hooks/useNoteContext";

export default function Form() {
    const [isOpen, setIsOpen] = useState(false);
    const {state,dispatch} = useNoteContext()

    const [formData, setFormData] = useState({
        formTitle: "",
        formDesc: ""
    })

    function handleChange(event) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await fetch('/notes/', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        if (!response.ok) {
            console.log(json)
        }

        if (response.ok) {
            console.log(json)
            dispatch({type: 'ADD_NOTE', payload: json})
            setIsOpen(!isOpen);
        }
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
        setFormData((prev)=>{
            return{
                formTitle: "",
                formDesc: ""
            }
        });
    };

    return (
        <div className="flex items-center justify-center">
            <button onClick={togglePopup} className="fixed bottom-5 right-5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer active:bg-blue-700 text-white rounded-full p-3 shadow-lg flex items-center justify-center">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex-col flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg p-8 relative w-[450px]">
                        <button className="absolute bg-transparent text-gray-500 hover:text-gray-700 active:text-gray-900 focus:outline-none top-[15px] right-[15px] rounded-full p-1 hover:bg-gray-200 active:bg-gray-300" onClick={togglePopup}>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <form className='flex flex-col' onSubmit={handleSubmit}>
                            <input type="text" className="border-gray-200 border-2 mb-2 py-2 mt-5 rounded-lg px-2 hover:border-gray-400 text-gray-700" placeholder='Title' onChange={handleChange} name="formTitle" value={formData.formTitle} />
                            <textarea className="border-gray-200 border-2 mb-2 h-[200px] py-2 rounded-lg px-2 hover:border-gray-400 text-gray-700" placeholder='Description' onChange={handleChange} name="formDesc" value={formData.formDesc} />
                            <button className="mt-4 mx-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                Add Note
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
