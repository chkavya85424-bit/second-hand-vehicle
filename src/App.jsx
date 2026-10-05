import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Vehicles from "./pages/Vehicles.jsx";
import VehicleDetails from "./pages/VehicleDetails.jsx";
import SellPage from "./pages/SellPage.jsx";
import Favorites from "./pages/Favorites.jsx";
import Compare from "./pages/Compare.jsx";
import Login from "./pages/LoginTemp.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
function Sidebar() {
  const location = useLocation();
  function getClass(path) {
    if (path === "/" && location.pathname === "/") {
      return "sidebar-link active";
    }
    if (
      path !== "/" &&
      location.pathname.startsWith(path)
    ) {
      return "sidebar-link active";
    }
    return "sidebar-link";
  }
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        VehicleHub
      </div>
      <nav className="sidebar-menu">
        <Link
          to="/"
          className={getClass("/")}
        >
          <span>⌂</span>
          <span>Dashboard</span>
        </Link>
        <Link
          to="/vehicles"
          className={getClass("/vehicles")}
        >
          <span>🚗</span>
          <span>Buy Vehicle</span>
        </Link>
        <Link
          to="/sell"
          className={getClass("/sell")}
        >
          <span>＋</span>
          <span>Sell Vehicle</span>
        </Link>
        <Link
          to="/favorites"
          className={getClass("/favorites")}
        >
          <span>♡</span>
          <span>Favorites</span>
        </Link>
        <Link
          to="/compare"
          className={getClass("/compare")}
        >
          <span>⇄</span>
          <span>Compare</span>
        </Link>
        <Link
          to="/dashboard"
          className={getClass("/dashboard")}
        >
          <span>👤</span>
          <span>My Account</span>
        </Link>
      </nav>
      <div className="sidebar-bottom">
        <Link to="/login">
          Login
        </Link>
        <Link to="/register">
          Register
        </Link>
      </div>
    </aside>
  );
}
function AppLayout() {
  const location = useLocation();
  const isLogin =
    location.pathname === "/login";
  const isRegister =
    location.pathname === "/register";
  if (isLogin || isRegister) {
    return (
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    );
  }
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/vehicles"
            element={<Vehicles />}
          />
          <Route
            path="/vehicles/:id"
            element={<VehicleDetails />}
          />
          <Route
            path="/sell"
            element={<SellPage />}
          />
          <Route
            path="/favorites"
            element={<Favorites />}
          />
          <Route
            path="/compare"
            element={<Compare />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
        </Routes>
      </main>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
export default App;