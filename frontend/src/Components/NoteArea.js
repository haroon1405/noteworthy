import React from "react";
import Note from "./Note";

export default function NoteArea(){
    return (
        <>
            <div className="mx-6 mt-9 mb-9 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-y-7 justify-items-center">
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </div>
        </>
    )
}