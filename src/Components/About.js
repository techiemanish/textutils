import React from "react";
import { useState } from "react";

export default function About() {
  const [mode, setMode] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [buttonText, setButtonText] = useState("Enable Dark Mode");

  const enableMode = () => {
    if (mode.color === "black") {
      setMode({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setButtonText("Enable Light Mode");
    } else {
      setMode({
        color: "black",
        backgroundColor: "white",
      });
      setButtonText("Enable Dark Mode");
    }
  };
  return (
    <div className="container mt-3" style={mode}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={mode}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mode}>
              <p>
                Textutils gives you a way to analyze your text quickly and
                efficiently. You can count words, character, use this utility to
                convert your text to lowercase, to uppercase, remove extra
                spaces and copy your analyze text.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mode}
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mode}>
              <p>
                TextUtils is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                TextUtils reports the number of words and characters. Thus it is
                suitable for writing text with word/ character limit.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mode}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mode}>
              <p>
                This word counter software works in any web browsers such as
                Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                count characters in facebook, blog, books, excel document, pdf
                document, essays, etc.
              </p>
            </div>
          </div>
        </div>
        <button className="btn btn-primary mt-3 mx-2" onClick={enableMode}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
