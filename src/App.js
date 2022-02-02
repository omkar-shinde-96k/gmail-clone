import "./App.scss";
import { Homepage } from "./pages/Homepage/Homepage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inbox } from "./pages/Inbox/inbox";
import { ViewMail } from "./pages/ViewMail/ViewMail";
import { Starred } from "./pages/Starred/Starred";
import { Allmails } from "./pages/Allmails/Allmails";
import { Trashed } from "./pages/Trashed/Trashed";
import { Archived } from "./pages/Archived/Archived";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route path="/:id" element={<ViewMail />} />
            <Route path="/starred" element={<Starred />} />
            <Route path="/allmails" element={<Allmails />} />
            <Route path="/trashed" element={<Trashed />} />
            <Route path="/archived" element={<Archived />} />
            <Route index element={<Inbox />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
