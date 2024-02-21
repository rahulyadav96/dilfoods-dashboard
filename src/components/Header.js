export default function Header() {
  return (
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
  );
}
