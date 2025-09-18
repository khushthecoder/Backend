import { Router } from "express"; 
import userRoutes from "./userRoutes.js";
const router = Router();

router.use("/api/users", userRoutes);
// → Jab bhi koi request /api/users par aayegi, to use userRoutes module handle karega.

export default router;
// → Is file me humne ek router banaya hai jo alag-alag routes ko manage karta hai.
// → Hum is router ko apne main server file me import karke use kar sakte hain.