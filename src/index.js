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
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Root Route (Fixes 'Cannot GET /')
app.get("/", (req, res) => {
  res.json({ message: "Backend API is working perfectly on Vercel!" });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

// Only listen when running locally
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export app for Vercel Serverless Function
export default app;
