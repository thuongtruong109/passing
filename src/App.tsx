import Rule from "./components/Rule";
import Toggle from "./components/Toggle";

function App() {
  return (
    <form id="signup-form" className="flow" onSubmit={() => false}>
      <div className="input-wrapper">
        <label htmlFor="new-password">🔑 Password Checker</label>
        <div className="password-input-wrapper">
          <input
            type="password"
            id="new-password"
            name="password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$"
            autoComplete="new-password"
          />
          <Toggle
            dataInputId="new-password"
            dataStatusId="password-display-status"
          />
        </div>
        <Rule
          inputId="new-password"
          rules={[".{9}", ".*\\d", "[\\W_]", "[a-z]", "[A-Z]"]}
        />
      </div>
    </form>
  );
}

export default App;
