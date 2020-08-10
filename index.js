const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const pixel = fs.readFileSync(__dirname + '/pixel.gif');
const pixelHeaders = {
    'Cache-Control': 'private, no-cache, proxy-revalidate, max-age=0',
    'Content-Type': 'image/gif',
    'Content-Disposition': 'inline',
    'Content-Length': pixel.length
};

app.get('/pixel.gif', cors(), (req, res, next) => {
    res.set(pixelHeaders)
    res.status(200).send(pixel)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});