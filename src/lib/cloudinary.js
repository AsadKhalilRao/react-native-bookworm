import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const c = cloudinary.config();
console.log(
  "CLD cloud:", JSON.stringify(c.cloud_name),
  "key:", JSON.stringify(c.api_key),
  "secretLen:", c.api_secret?.length
);

export default cloudinary;
