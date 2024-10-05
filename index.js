const port = 5000;
const express = require("express");


const app = express()

app.listen(port, () => {
    console.log(`server runnig on port ${port}`);
})

const getContact=(req,res)=>{
    res.status(200).json({message:"Get all contacts"});

};