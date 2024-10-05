const mongoose=require("mongoose")

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please add the contact name"],
        },
        email: {
            type: String,
            required: [true, "Please add the contact emai address"],
            unique:[true,"Email adress already taken"],
        },
        password: {
            type: String,
            required: [true, "please add the user password"],
        },
    },
    {
        timestamps:true
    }
);

module.exports=mongoose.model("User",userSchema)