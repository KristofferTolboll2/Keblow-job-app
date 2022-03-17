import React, { useEffect, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Input, TextField } from "@mui/material";
import { renderRandomTemplate } from "./TextGenerator";

function App() {
  const [currentJob, setCurrentJob] = React.useState("");
  const [newJobPosition, setNewJobPosition] = React.useState("");
  const [newJobCompany, setNewJobCompany] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [genereatedText, setGeneratedText] = React.useState("");

  const [width, setWidth] = React.useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const submitHandler = (e: any) => {
    const generatedTemplate = renderRandomTemplate(
      currentJob,
      newJobPosition,
      newJobCompany
    );
    setGeneratedText(generatedTemplate);
    setIsSubmitted(true);
  };
  console.log(currentJob);
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
              label="Old Company"
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
            <Button variant="contained" onClick={submitHandler}>
              Submit
            </Button>
          </div>
        </>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {" "}
          <h2 style={{ textAlign: "center" }}>
            The <span style={{ color: "#2867B2" }}>LinkedIn</span> job update
            generator
          </h2>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "20px",
              border: "1px solid black",
              fontSize: "25px",
              margin: isMobile ? `40px` : `40px 400px`,
            }}
          >
            {genereatedText}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              margin: "15px",
            }}
          >
            <Button onClick={(e) => setIsSubmitted(false)} variant="contained">
              Try again?
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                navigator.clipboard.writeText(genereatedText);
              }}
            >
              Copy
            </Button>
          </div>
          <img
            src="https://previews.123rf.com/images/chagin/chagin1205/chagin120500102/13462171-portr%C3%A4t-der-selbstbewusste-junge-gesch%C3%A4ftsleute-mit-daumen-nach-oben-anmelden.jpg"
            alt="job-photo"
          />
        </div>
      )}
    </div>
  );
}

export default App;
