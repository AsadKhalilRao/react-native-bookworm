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


//import express from "express";
//import "dotenv/config"
// import authRoutes from "./routes/authRoutes.js"
// import bookRoutes from "./routes/bookRoutes.js"
// import { connectDB } from "./lib/db.js";
// import cors from "cors"
// // import job from "./lib/cron.js";
// const app=express();
// const PORT=process.env.PORT || 3000

// // job.start()
// app.use(express.json())
// app.use(cors());
// app.use("/api/auth",authRoutes)
// app.use("/api/books",bookRoutes)
// app.get("/",(req, res)=>{
//      res.status(200).json({message:"okay api are working"})
// })
//    connectDB()
// if (process.env.NODE_ENV !== "production") {
//   app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
// }

// export default app;
// import express from "express";
// import "dotenv/config"
// import authRoutes from "./routes/authRoutes.js"
// import bookRoutes from "./routes/bookRoutes.js"
// import { connectDB } from "./lib/db.js";
// import cors from "cors"
// // import job from "./lib/cron.js";
// const app=express();
// const PORT=process.env.PORT || 3000

// // job.start()
// app.use(express.json())
// app.use(cors());
// app.use("/api/auth",authRoutes)
// app.use("/api/books",bookRoutes)
// app.get("/",(req, res)=>{
//      res.status(200).json({message:"okay api are working"})
// })
// console.log({PORT})
// app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`)
//     connectDB()
// })



import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import { connectDB } from "./lib/db.js";
// import job from "./lib/cron.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Make sure the DB is connected before any route runs (needed on Vercel)
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({ message: "Database connection failed" });
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "okay api are working" });
});

// Health check: open /api/health in the browser to confirm the DB
app.get("/api/health", (req, res) => {
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  res.json({ db: states[mongoose.connection.readyState] });
});

// Only start a listening server locally, not on Vercel
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;



























