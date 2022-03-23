// IMPORTED MODULES
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// IMPORTED MODULES FOR ROUTES
const routes = require("./routes/routes");

// MIDDLEWARE TO PASSING DATA
const server = express();
server.use(bodyParser.json());
server.use(cors());

// ENDPOINTS
server.use("/api", routes);

// LISTEN TO PORT
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`The server is listening on ${port}`);
});
