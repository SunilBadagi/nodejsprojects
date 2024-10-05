const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler=require('./middleware/errorhandle');
const connectDb = require("./config/dbConnection");


connectDb();
const app = express()
app.use(errorHandler)
const port = process.env.PORT;
app.use(express.json());
app.use('/api/contacts',require("./Routes/contactRoutes"))
app.use('/api/users',require("./Routes/userRoutes"))



app.listen(port, () => {
    console.log(`server runnig on port ${port}`);
})
