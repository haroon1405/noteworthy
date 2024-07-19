const express = require('express')
const {getNotes,getSingleNote,createNote,updateNote,deleteNote} = require('../controllers/noteController')

const router = express.Router()

// GET all notes
router.get("/",getNotes)

// GET a single note
router.get("/:id",getSingleNote)

// POST a single note
router.post("/", createNote)

// UPDATE a single note
router.patch("/:id",updateNote)

// DELETE a single note
router.delete("/:id",deleteNote)

module.exports = router