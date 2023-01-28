import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import { Routes, Route, Link } from "react-router-dom";
import RecommenedVideos from "./RecommenedVideos";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <div className="app_page">
                <Sidebar />
                <RecommenedVideos />
              </div>
            </>
          }
        />
        <Route
          exact
          path="/search/:searchTerm"
          element={
            <>
              <Header />
              <div className="app_page">
                <Sidebar />
                <SearchPage />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
