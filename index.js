const server = require('./src/server');

const port = process.env.PORT || 8080;

server.listen(port, function listenCallback() {
  console.log(`Server listen at port ${port} :)`);
});