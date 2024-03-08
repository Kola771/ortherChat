const http = require("node:http")
const port = 3000;
const app = require('../app');

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Le serveur est prêt à demarrer sur le http://localhost:${port}`);
})
