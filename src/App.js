import "./App.scss";
// import { Homepage } from "./pages/Homepage.js";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AllMails } from "./Pages/AllMails";

import { Navbar } from "./Components/Navbar/Navbar.js";
import { Sidebar } from "./Components/Sidebar/Sidebar.js";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Outlet />
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
