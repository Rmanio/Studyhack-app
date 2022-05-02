const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/',function(req,res) {
    res.sendfile(path.join(__dirname + '/views/index.html'));
});

app.get('/profile',function(req,res) {
    res.sendfile(path.join(__dirname + '/views/profilepage.html'));
});

app.listen(process.env.port || 3000);

console.log('Running at http://localhost:3000');