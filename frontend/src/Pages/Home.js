import React from "react";
import Navbar from "../Components/Navbar";
import NoteArea from "../Components/NoteArea";
import Form from "../Components/Form";

export default function Home(){
    return (
        <>
            <Navbar />
            <NoteArea />
            <Form />
        </>
    )
}