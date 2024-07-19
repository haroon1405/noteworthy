const Note = require('../models/note')
const mongoose = require('mongoose')

// Function to get all notes
async function getNotes(req,res){
    const allNotes = await Note.find({}).sort({createdAt:-1});
    res.status(200).json(allNotes);
}

// Function to get one note
async function getSingleNote(req,res){
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"Object ID not valid"});
    }

    const singleNote = await Note.findById(id)

    if(!singleNote){
        return res.status(400).json({error:"No such note"});
    }

    res.status(200).json(singleNote);
}

// Function to post one note
async function createNote(req,res){
    const title = req.body.formTitle
    const desc = req.body.formDesc
    try{
        const postedNote = await Note.create({title,desc})
        res.status(200).json(postedNote);
    }
    catch(error){
        if(!title && !desc){
            return res.status(400).json({error:'Title and Description is required'});
        }
        else if(!title){
            return res.status(400).json({error:'Title is required'});
        }
        else if(!desc){
            return res.status(400).json({error:'Description is required'});
        }
        res.status(400).json({error:error.message});
    }
}

// Function to update one note
async function updateNote(req,res){
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"Object ID not valid"});
    }

    const updatedNote = await Note.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!updatedNote){
        return res.status(400).json({error:"No such note"});
     }

     res.status(200).json(updatedNote);
}

// Function to delete one note
async function deleteNote(req,res){
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"Object ID not valid"});
    }

    const deletedNote = await Note.findOneAndDelete({_id:id})

    if(!deletedNote){
       return res.status(400).json({error:"No such note"});
    }

    res.status(200).json(deletedNote);

}


module.exports = {getNotes,getSingleNote,createNote,updateNote,deleteNote}