const http = require('http')

const path = require('path')

const port = process.env.PORT || 8080;

const app = require('./app');

const server = http.createServer(app);

server.listen(port, () => {
    console.log("server listening at http://localhost:"+port);
})