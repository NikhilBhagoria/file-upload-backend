const cloudinary = require('cloudinary').v2;
require('dotenv').config();

exports.cloudinaryConfig = () => {
    try {
     if (
       !process.env.CLOUDINARY_CLOUD_NAME ||
       !process.env.CLOUDINARY_API_KEY ||
       !process.env.CLOUDINARY_API_SECRET) {
       throw new Error('Cloudinary configuration variables are missing in .env file');
        }  
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
} catch (error) {
    console.error('Error configuring Cloudinary:', error.message);
    throw error;
  }
};