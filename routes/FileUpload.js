const express = require('express');
const router = express.Router();

const {localFileUpload}= require('../controllers/fileUpload');

// POST request to upload a file
router.post('/local/upload', localFileUpload);

module.exports = router;