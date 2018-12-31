import multer from 'multer';

const storage = multer.diskStorage({
  destination: 'uploads/',
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
