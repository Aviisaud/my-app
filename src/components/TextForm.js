import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    // Convert text to uppercase
    let newText = text.toUpperCase();
    setText(newText);

    // Check if the text is empty and display an appropriate alert
    if (text.trim().length === 0) {
      props.showAlert("Please enter the text", "warning");
    } else {
      props.showAlert("Converted to upper case!", "success");
    }
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (text.trim().length === 0) {
      props.showAlert("Please enter the text", "warning");
    } else {
      props.showAlert("Coverted to lower case!", "success");
    }
  };

  const handleCopy = () => {
    if (text.trim()) {
        navigator.clipboard.writeText(text);
        props.showAlert('Text copied to clipboard!', 'success');
    } else {
        props.showAlert('No text to copy', 'warning');
    }
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("The text are cleared!", "success");
  };

  const reverseString = () => {
    console.log("Reverse Triggered");
    let newText = text.split("").reverse().join("");
    setText(newText);
    if (text.trim().length === 0) {
      props.showAlert("Please enter the text", "warning");
    } else {
      props.showAlert("The string is reversed!", "success");
    }
  };

  const handleOnChange = (event) => {
    // console.log("handleOnChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "#fff" : "#252525" }}
      >
        <h1>{props.heading1}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter the Text Here"
            style={{
              backgroundColor: props.mode === "dark" ? "#434C55" : "#fff",
              color: props.mode === "dark" ? "#fff" : "#252525"
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-4" onClick={handleLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleCopy}>
                Copy Text
            </button>
        <button className="btn btn-primary mx-4" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary" onClick={reverseString}>
          Reverse String
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "#fff" : "#252525" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} character
        </p>
        <p>{(text.match(/[aeiou]/gi) || []).length} vowels</p>{" "}
        <p>{0.008 * text.split(" ").length} minutes</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
