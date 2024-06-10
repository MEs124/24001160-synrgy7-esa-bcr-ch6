import {
  v2 as cloudinary,
  UploadApiResponse,
  UploadApiErrorResponse,
} from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Konfigurasi Cloudinary dengan memanfaatkan variabel lingkungan
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "default_cloud_name",
  api_key: process.env.CLOUDINARY_API_KEY || "default_api_key",
  api_secret: process.env.CLOUDINARY_API_SECRET || "default_api_secret",
  secure: true,
});

export { cloudinary, UploadApiResponse, UploadApiErrorResponse };
