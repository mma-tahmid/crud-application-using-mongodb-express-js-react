const express = require("express")

const userControllers = require("../controllers/UserControllers");



const router = express.Router();


router.post("/create-user", userControllers.CreateUser);
router.put("/update-user/:useruniqueid", userControllers.UpdateUser);
router.get("/get-user-by-id/:useruniqueid", userControllers.GetUserById);
router.get("/get-all-user", userControllers.ShowAlluser);
router.delete("/delete-user/:useruniqueid", userControllers.DeleteUser);







module.exports = router; 