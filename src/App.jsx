import { Sidebar } from "./components/Sidebar/Sidebar";
import { TopBar } from "./components/TopBar/TopBar";
import { HomePage } from "./pages/HomePage/HomePage";
import patternBg from "./assets/pattern-bg.svg";
import "./App.css";

/* Force light theme regardless of OS preference */
document.documentElement.setAttribute("data-theme", "light");

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <TopBar />
        <main className="dashboard-content">
          <img
            src={patternBg}
            alt=""
            className="dashboard-pattern"
            aria-hidden="true"
          />
          <HomePage />
        </main>
      </div>
    </div>
  );
}

export default App;
