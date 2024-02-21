import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "80px" }}>
          <img
            src={"/images/dilfoods_logo.png"}
            alt="logo"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <p>Dashboard Analytics</p>
      </header>
    </div>
  );
}

export default App;
