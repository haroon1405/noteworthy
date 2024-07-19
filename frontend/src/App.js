import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import NoteDetails from './Pages/NoteDetails';

export default function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<NoteDetails />} />
        </Routes>
      </BrowserRouter>
  )
}