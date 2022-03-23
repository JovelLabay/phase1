// IMPORTED MODULES
const connection = require("../connection/db");

// FACTORY FUNCTION TO CREATE A BLUEPRINT OF THE OBJECT TO BE SENT TO THE DATABASE
function postPeople(Fname, Lname) {
  // THIS IS FOR THE DATE AND TIME CREATION
  // DATE
  const dt = new Date();
  const mm = dt.getMonth() + 1;
  const dd = dt.getDate();
  const yyyy = dt.getFullYear();
  // TIME
  const s = dt.getSeconds();
  const m = dt.getMinutes();
  const h = dt.getHours();
  const fullDate = `${yyyy}-${mm}-${dd}`;
  const fullTime = `${h}:${m}:${s}`;

  const people = {
    Fname,
    Lname,
    // A METHOD TO BE INVOKE IN ORDER TO EXECUTE SQL COMMAND
    saveToPeople() {
      let sql = `INSERT INTO people (fName, lName, dateAt, timeAt) VALUES ('${Fname}', '${Lname}', '${fullDate}', '${fullTime}')`;
      connection.query(sql, async function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      });
    },
  };

  return people;
}

// EXPORTED MODULES
module.exports = postPeople;
