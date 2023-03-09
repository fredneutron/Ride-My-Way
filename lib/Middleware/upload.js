import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: path.join(__dirname+'/../uploads/'),
  filename: (req, file, next) => {
    next(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, next) => {
  // accept only images
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    next(null, true);
  } else {
    next(new Error('image type not accepted'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

export default upload;
