import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import TheForm from "./Form";
import TheModal from "./Modal";

export default function App() {
  // URL
  const url = "http://localhost:8000/api/data";

  // LIST
  const [list, setList] = useState([]);

  // TEXTBOXES VALUES
  const [Fname, setFname] = React.useState("");
  const [Lname, setLname] = React.useState("");

  // SUBMIT BTN STATE
  const [btn, setbtn] = React.useState("Submit");

  // ON-MOUNT FETCH
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setList(data))
      .catch((err) => alert(err.message));
  }, []);

  // TABLE TITLE
  const tableTitle = ["Index", "Full Name", "Date", "Time"];

  // CREATE FUNCTION
  const create = async (e) => {
    e.preventDefault();

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Fname,
          Lname,
        }),
      });

      setbtn("Submitting");

      // THIS WILL ONLY BE INVOKED IF UPON SUBMISSION IS SUCCESSFULL
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setList(data);
          setbtn("Submit");
          setFname("");
          setLname("");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      alert(error.message);
    }
  };

  // ITEM DETAILS
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [id, setid] = useState("");
  const [firstname, setfname] = useState("");
  const [lastname, setlname] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const itemDetails = (data) => {
    setShow(true);
    setid(data.id);
    setfname(data.fName);
    setlname(data.lName);
    setdate(data.dateAt);
    settime(data.timeAt);
  };

  // TO DESTRUCTURE THE IMPORTED PROPERTIES
  const props = { Fname, setFname, Lname, setLname, create, btn };
  const props2 = {
    id,
    firstname,
    lastname,
    date,
    time,
    show,
    handleClose,
  };

  return (
    <>
      {/* HEADER */}
      <div className="header">
        <h1>Welcome Phase 1!</h1>
      </div>
      <div className="App">
        {/* BODY */}
        <div className="container">
          {/* TABLE */}
          <div className="table">
            <Table>
              {/* TABLE HEADER */}
              <thead>
                <tr>
                  {tableTitle.map((data, index) => {
                    return <td key={index}>{data}</td>;
                  })}
                </tr>
              </thead>
              {/* TABLE DATA */}
              <tbody>
                {list.map((data, index) => {
                  const fullname = `${data.fName} ${data.lName}`;

                  // THIS CAN BE REFACTOR TO ONE LINE ONLY USING ARRAY METHODS BELOW
                  // const lolo = fullname.split("");
                  // let kiki = "";
                  // lolo.map((dodo) => {
                  //   return (kiki += dodo + " ");
                  // });

                  return (
                    <tr
                      className="itemDetail"
                      key={index}
                      onClick={() => itemDetails(data)}
                    >
                      <th>{index}</th>
                      <th>{fullname.split("").join(" ")}</th>
                      <th>{data.dateAt}</th>
                      <th>{data.timeAt}</th>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
        {/* FORM */}
        <TheForm {...props} />
      </div>

      {/* MODAL */}
      <TheModal {...props2} />
    </>
  );
}
