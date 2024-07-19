const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const noteRoutes = require('./routes/notes.js');

const app = express();

app.use(express.json())

// Handling Routes
app.use("/notes",noteRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Mongoose Connected and Listening on Port-${process.env.PORT}`)
    });
})
.catch((err)=>{
    console.log(err)
})