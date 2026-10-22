// import express from "express";
// import "dotenv/config"
// import authRoutes from "./routes/authRoutes.js"
// import bookRoutes from "./routes/bookRoutes.js"
// import { connectDB } from "./lib/db.js";
// import cors from "cors"
// const app=express();
// const PORT=process.env.PORT || 3000
// app.use(express.json())
// app.use(cors());
// app.use("/api/auth",authRoutes)
// app.use("/api/books",bookRoutes)
// console.log({PORT})
// app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`)
//     connectDB()
// })


import express from "express";
import "dotenv/config"
import authRoutes from "./routes/authRoutes.js"
import bookRoutes from "./routes/bookRoutes.js"
import { connectDB } from "./lib/db.js";
import cors from "cors"
// import job from "./lib/cron.js";
const app=express();
const PORT=process.env.PORT || 3000

// job.start()
app.use(express.json())
app.use(cors());
app.use("/api/auth",authRoutes)
app.use("/api/books",bookRoutes)
app.get("/",(req, res)=>{
     res.status(200).json({message:"okay api are working"})
})
   connectDB()
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}

export default app;
