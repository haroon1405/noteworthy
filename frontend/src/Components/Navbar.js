import React from "react";

export default function Navbar(){
    return (
        <>
            <div className="bg-blue-300 py-1 px-2 flex justify-between shadow-lg">
                <p className="text-4xl py-3 ps-5 font-playwrite-hu">Noteworthy</p>
                <p className="mt-auto text-xl italic pe-5 font-roboto">Capture Every Thought</p>
            </div>
        </>
    )
}