import React,{useEffect,useState} from "react";
import Note from "./Note";
import { useNoteContext } from "../hooks/useNoteContext";

export default function NoteArea(){

    const {state,dispatch} = useNoteContext()

    useEffect(()=>{

        fetch('/notes')
        .then((response)=>{
            if(response.ok){
                return response.json()
            }
        })
        .then((data)=>{
            console.log(data)
            dispatch({type: 'SET_NOTES', payload: data})
        })

    },[dispatch])

    return (
        <>
            <div className="mx-6 mt-9 mb-9 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-y-7 justify-items-center">
                {(state.notes)? (state.notes.map((note)=>{
                    return <Note title={note.title} desc={note.desc} date={note.updatedAt} key={note._id} id={note._id}/>
                })): "Loading..."}
            </div>
        </>
    )
}