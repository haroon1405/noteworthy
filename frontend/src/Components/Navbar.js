import React from "react";

export default function Navbar(){
    return (
        <>
            <div className="bg-blue-300 py-1 px-2 flex flex-col sm:flex-row sm:justify-between text-center shadow-lg">
                <p className="select-none text-4xl py-3 sm:ps-5 font-playwrite-hu">Noteworthy</p>
                <p className="select-none mt-auto text-md sm:text-xl italic sm:pe-5 font-roboto">Capture Every Thought</p>
            </div>
        </>
    )
}