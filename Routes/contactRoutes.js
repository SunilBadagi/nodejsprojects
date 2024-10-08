const express =require("express");
const router=express.Router();

const{
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
}=require("../Controllers/contactControllers");
const validateToken = require("../middleware/validateTokenHandler");
router.use(validateToken)
router.route("/").get(getContacts);

router.route("/:id").get(getContact);

router.route("/:id").post(createContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports=router;