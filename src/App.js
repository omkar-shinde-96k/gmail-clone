import "./App.scss";
// import { Homepage } from "./pages/Homepage.js";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AllMails } from "./pages/AllMails/AllMails";

import { Navbar } from "./Components/Navbar/Navbar.js";
import { Sidebar } from "./Components/Sidebar/Sidebar.js";

const Homepage = () => {
  return (
    <>
      <div className="main" style={{ width: "100%", height: "100vh" }}>
        <Navbar />
        <div style={{ display: "flex", width: "100%" }}>
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      {/* <Homepage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route index element={<AllMails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
