const JSONserver = require("json-server");
const server = JSONserver.create();
const router = JSONserver.router("./public/db.json");
const middlewares = JSONserver.defaults({ static: "./build" });

const PORT = process.env.port || 3001;
server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log("Server wuz runned");
});
