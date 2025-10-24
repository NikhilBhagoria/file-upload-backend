const File = require('../models/File');


exports.localFileUpload = async (req, res) => {
    try {
        // Access the uploaded file via req.file
        const file = req.files.file;
        const localPath = __dirname + "/uploads/" + Date.now() + "_" +`.${file.name.split('.')[1]}`;

        // Move the file to the desired location
        await file.mv(localPath, async (err) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'File upload failed', error: err.message });
            }
        });

        res.json({ success: true, message: 'File uploaded successfully', path: localPath });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};