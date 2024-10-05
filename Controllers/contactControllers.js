const asyncHandler=require('express-async-handler');
const Contact=require('../models/contactModels')
//@desc Get all contacts
//@route  Get /api/contacts
//@access private

const getContact= asyncHandler(async(req,res)=>{
    const contact=await Contact.findById({user_id:req.user.id});
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }
    res.status(200).json(contact);

});

const getContacts=asyncHandler(async(req,res)=>{
    const contacts=await Contact.find();
    res.status(200).json(contacts);

});

//@desc create new contacts
//@route post  Get /api/contacts
//@access public
const putContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`get contacts for ${req.params.id}`});
});


const updateContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("no permission to access other data")
    }
    const updatedContact=await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
        new:true
    }
   )
    res.status(200).json(updatedContact);
});



const deleteContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("no permission to access other data")
    }
    
    await Contact.remove();
    res.status(200).json(contact);
});



const createContact=asyncHandler(async(req,res)=>{
    console.log('The request body is:',req.body)
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const contact=await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id
    })
    res.status(200).json(contact);
});




module.exports={getContact,getContacts,putContact,updateContact,deleteContact,createContact};