const express = require('express');
const path = require('path');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/merge', upload.array('pdfs', 3), function(req, res, next) {
  res.send({data:req.files})
})

app.listen(3000);
console.log('Server started at http://localhost:3000');
