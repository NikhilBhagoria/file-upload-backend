const express = require('express');
const app = express();

// Load environment variables from .env file
require('dotenv').config();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());
const fileUpload = require('express-fileupload');
app.use(fileUpload());

const db = require('./config/database');
db.connectDB();

const cloudinary = require('./config/cloudinary');

// Route to handle file upload
const uploadRoute = require('./routes/FileUpload');
app.use('/api/v1/upload', uploadRoute);

app.get('/', (req, res) => {
    res.send('Welcome to the File Upload Service');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

