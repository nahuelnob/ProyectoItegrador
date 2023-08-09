const server = require("./app");
const { conn } = require("./DB_connection");

const PORT = 3001;

conn
.sync({ alter: true })
.then(() => {
  server.listen(PORT, () =>
    console.log(`server is listening on port ${PORT} || NOB`)
  );
})
.catch((err) => console.log(err));
