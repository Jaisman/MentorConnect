import express from "express";
import user from "../models/user.js";
import { handleUserSignUp,handleUserLogin} from "../controllers/user.js";
import { authenticateuser } from "../middlewares/auth.js";

const router = express.Router();

// Create a new user
router.post("/signup",handleUserSignUp);
router.post("/login",handleUserLogin);
// router.post("/logout",authenticateuser);

export default router;  