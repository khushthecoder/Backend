import { Router } from "express";
import {createUser,updateUser,fetchusers,singleuser,deleteUser} from '../controllers/userController.js'
const router= Router()

outer.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.get("/", userController.fetchusers);
router.get("/:id", userController.singleuser);
router.delete("/:id", userController.deleteUser);
export default router;