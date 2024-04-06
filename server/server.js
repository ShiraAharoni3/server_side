// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Serve HTML file for any incoming request
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');
        const readStream = fs.createReadStream(filePath);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        readStream.pipe(res);
    } else {
        // Handle other requests
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});