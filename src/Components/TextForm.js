import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const toUpperCase = () => {
    let upperCase = text.toUpperCase();
    setText(upperCase);
    props.showAlert("Converted to Upper case", "success");
  };

  const toLowerCase = () => {
    let lowercase = text.toLowerCase();
    setText(lowercase);
    props.showAlert("Converted to lower case", "success");
  };

  const copyText = () =>{
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied!", "success");
  }

  const removeExtraSpaces = () => {
      let result = text.split(/[ ]+/);
      setText(result.join(" "));
      props.showAlert("Removed extra spaces", "success");
  }

  const clearText = () =>{
      let result = "";
      setText(result);
      props.showAlert("Cleared!", "success");
  }

  const changeHandler = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container mt-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label" style={{color:props.mode==='dark'?'white':'red'}}>
            <strong>{props.heading}</strong>
          </label>
          <textarea
            type="textarea"
            value={text}
            onChange={changeHandler}
            style={{
                //backgroundColor: props.mode==='dark'?'grey':'white',
                //color: props.mode==='dark'?'white':'black'
            }}
            rows="8"
            className="form-control"
            id="myBox"
          ></textarea>
          <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={toUpperCase}>
            Convert to UpperCase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={toLowerCase}>
            Convert to LowerCase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={copyText}>
            Copy Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mt-3 mx-2" onClick={removeExtraSpaces}>
            Remove ExtraSpaces
          </button>
          <button disabled={text.length===0} className="btn btn-primary mt-3" onClick={clearText}>
            Clear
          </button>
        </div>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text Summary</h2>
        <p>
          {text.split(/\s+/).length - 1} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it"}</p>
      </div>
    </>
  );
}
