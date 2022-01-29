import "./App.scss";
// import { Homepage } from "./pages/Homepage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./componants/navbar/Navbar.js";
import { Sidebar } from "./componants/sidebar/Sidebar.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>{/* <Route index element={<Homepage />} /> */}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
