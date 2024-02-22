import { Avatar } from "primereact/avatar";
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
      <h3 className="m-0 text-sm">
        <Avatar label="R" shape="circle" /> Rahul Yadav
      </h3>
    </header>
  );
}
