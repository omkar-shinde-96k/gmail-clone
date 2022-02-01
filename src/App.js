import "./App.scss";
import { Homepage } from "./pages/Homepage/Homepage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllMails } from "./pages/Inbox/inbox";
import { ViewMail } from "./pages/ViewMail/ViewMail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route path="/:id" element={<ViewMail />} />
            <Route index element={<AllMails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
