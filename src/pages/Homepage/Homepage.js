import { Navbar } from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar.js";
import { Outlet } from "react-router-dom"; 
export const Homepage = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};
