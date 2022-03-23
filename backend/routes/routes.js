// IMPORTED MODULES
const express = require("express");
const routes = express.Router();
const connection = require("../connection/db");
const schema = require("../models/schema");

// GET ALL THE DATA
routes.get("/data", (req, res) => {
  const sql = "SELECT * FROM people";
  connection.query(sql, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// POST DATA TO SERVER
routes.post("/data", async (req, res) => {
  const Fname = req.body.Fname;
  const Lname = req.body.Lname;
  if ((Fname || Lname) === "") {
    res.status(202).send("All form must be filled out.");
  } else {
    const thedata = await schema(Fname, Lname);
    thedata.saveToPeople();
    res.status(201).send(thedata);
  }
});

// EXPORTED MODULES
module.exports = routes;
