import React, { useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Input, TextField } from "@mui/material";

function App() {
  const [currentJob, setCurrentJob] = React.useState("");
  const [newJobPosition, setNewJobPosition] = React.useState("");
  const [newJobCompany, setNewJobCompany] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  console.log(isSubmitted);
  return (
    <div className="App">
      {!isSubmitted ? (
        <>
          <div
            style={{
              padding: "15px",
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Current Job"
              variant="outlined"
              onChange={(e) => setCurrentJob(e.target.value)}
            />
            <TextField
              id="filled-basic"
              label="New Job"
              variant="outlined"
              onChange={(e) => setNewJobPosition(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="New Company"
              variant="outlined"
              onChange={(e) => setNewJobCompany(e.target.value)}
            />{" "}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" onClick={(e) => setIsSubmitted(true)}>
              Submit
            </Button>
          </div>
        </>
      ) : (
        <div>
          {" "}
          <p>
            Everybody, stop what you’re doing and read about me. Yesterday I
            quit my amazing dream job at {currentJob}, simply because I was
            offered something with a much higher pay. I want to thank my mom and
            dad, my amazing co-workers (I would tag you, but I don’t remember
            you all), I couldn’t have done this without you. Now I’m ready for
            new challenges as a {newJobPosition} at {newJobCompany}.
          </p>
          <Button onClick={(e) => setIsSubmitted(false)} variant="contained">
            Try again?
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
