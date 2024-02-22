import { Avatar } from "primereact/avatar";
export default function Header() {
  return (
    <header className="App-header sticky top-0 z-5">
      <div className="w-11 mx-auto py-2 flex justify-content-between align-items-center gap-5">
        <div style={{ width: "100px" }}>
          <img
            src={"/images/dilfoods_logo.png"}
            alt="logo"
            style={{ maxWidth: "80%", objectFit: "contain" }}
          />
        </div>
        <h3 className="m-0 text-sm">
          <Avatar label="R" shape="circle" /> Rahul Yadav
        </h3>
      </div>
    </header>
  );
}
