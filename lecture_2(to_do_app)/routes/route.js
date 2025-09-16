const express = require("express");
const router = express.Router();
const createTodo = require("../controllers/createtodo");

//define api route for creating todo
router.post("/todos", createTodo);

module.exports = router;

//ye route.js file me humne ek express router banaya hai jo /todos endpoint par POST request ko handle karta hai.
//jab bhi koi client /todos par POST request bhejega, to createTodo controller function call hoga jo naya todo create karega.
//finally, hum is router ko export kar rahe hain taaki ise main app file me use kiya ja sake.