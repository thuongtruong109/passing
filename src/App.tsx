import React from "react";
import Rule from "./components/Rule";
import Gen from "./components/Gen";

function App() {
  const inputId = "new-password";
  const [input, setInput] = React.useState<string>("");

  const detectData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const inputRef = React.useRef<HTMLInputElement>(null);
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const onToggle = () => {
    if (inputRef.current && btnRef.current) {
      if (inputRef.current.type === "password") {
        btnRef.current.setAttribute("aria-pressed", "true");
        btnRef.current.setAttribute("aria-label", "Hide password");
        inputRef.current.type = "text";
      } else {
        btnRef.current.setAttribute("aria-pressed", "false");
        btnRef.current.setAttribute("aria-label", "Show password");
        inputRef.current.type = "password";
      }
    }
  };

  React.useEffect(() => {
    onToggle();
  }, [inputRef, input]);

  return (
    <div id="signup-form" className="form">
      <div className="input-wrapper">
        <label htmlFor={inputId}>🔑 Password Checker</label>
        <div className="password-input-wrapper">
          <input
            type="password"
            id={inputId}
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$"
            autoComplete={inputId}
          />
          <button
            type="button"
            ref={btnRef}
            onClick={onToggle}
            aria-pressed="false"
            aria-label="Show password"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M228,175a8,8,0,0,1-10.92-3l-19-33.2A123.23,123.23,0,0,1,162,155.46l5.87,35.22a8,8,0,0,1-6.58,9.21A8.4,8.4,0,0,1,160,200a8,8,0,0,1-7.88-6.69l-5.77-34.58a133.06,133.06,0,0,1-36.68,0l-5.77,34.58A8,8,0,0,1,96,200a8.4,8.4,0,0,1-1.32-.11,8,8,0,0,1-6.58-9.21L94,155.46a123.23,123.23,0,0,1-36.06-16.69L39,172A8,8,0,1,1,25.06,164l20-35a153.47,153.47,0,0,1-19.3-20A8,8,0,1,1,38.22,99c16.6,20.54,45.64,45,89.78,45s73.18-24.49,89.78-45A8,8,0,1,1,230.22,109a153.47,153.47,0,0,1-19.3,20l20,35A8,8,0,0,1,228,175Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
            </svg>
          </button>
          <Gen onChange={detectData} />
        </div>
        <Rule inputData={input} />
      </div>
    </div>
  );
}

export default App;
