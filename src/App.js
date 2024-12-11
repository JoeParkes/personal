import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Jobs from "./components/jobs";
import Skills from "./components/skills";
import Blob from "./components/blob";
import ComingSoon from "./components/coming-soon";
function App() {
  return (
    <BrowserRouter>
      <div className="App max-w-[1440px] mx-auto p-6 md:p-12">
        <Blob />

        <Routes>
          <Route
            element={
              <>
                <Header />
                <Jobs />
                <Skills />
              </>
            }
          />
          <Route index element={<ComingSoon />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
