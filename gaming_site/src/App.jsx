import { BrowserRouter, Route, Routes } from "react-router-dom";

import Firts from "./pages/first_page";
import Second from "./pages/second_page";
import Third from "./pages/third_page";

import "./App.css";
import LayoutPage from "./components/layout/layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route path="/" element={<Firts />} />
            <Route path="/Second" element={<Second />} />
            <Route path="/Third" element={<Third />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
