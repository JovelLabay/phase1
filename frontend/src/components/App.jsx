import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import TheForm from "./Form";

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
      .catch((err) => console.log(err));
  }, []);

  // TABLE TITLE
  const tableTitle = [
    "ID",
    "First Name",
    "Last Name",
    "Date Created",
    "Time Created",
  ];

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

      // APPLICABLE BUT ONLY TO UPDATE THE DOM
      // setList((prevList) => {
      //   return [...prevList, data];
      // });

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

  // TO DESTRUCTURE THE IMPORTED PROPERTIES
  const props = { Fname, setFname, Lname, setLname, create, btn };

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
                  return (
                    <tr key={index}>
                      <td>{data.id}</td>
                      <td>{data.fName}</td>
                      <td>{data.lName}</td>
                      <td>{data.dateAt}</td>
                      <td>{data.timeAt}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          {/* FORM */}
          <TheForm {...props} />
        </div>
      </div>
    </>
  );
}
