const app = require('./app');
const http = require('http');

const server = http.createServer(app);
const port = 3003;

server.listen(port, () => {
    console.log(`La aplicacion esta corriendo en el puerto ${port}`);
});