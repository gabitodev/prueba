const app = require('./app');
const http = require('http');
const { PORT } = require('./config');

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`La aplicacion esta corriendo en el puerto ${PORT}`);
});