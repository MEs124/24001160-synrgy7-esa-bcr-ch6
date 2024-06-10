import { Request } from "express";
import multer, { FileFilterCallback } from "multer";

// Validasi format Image
const validateFileType = (allowedMimeTypes: string[]) => {
  return (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      const error = new Error(
        `Only accepted file with type ${allowedMimeTypes.join(", ")}`
      ) as any;
      error.code = "INVALID_FILE_TYPE";
      cb(error, false);
    }
  };
};

const carImg = multer({
  storage: multer.memoryStorage(),
  fileFilter: validateFileType([
    "image/bmp",
    "image/jpeg",
    "image/png",
    "image/gif",
  ]),
  limits: { fileSize: 2000000 }, // Batas ukuran file maksimal 2MB
});

export default carImg;
