import {
  Link,
  useNavigate
} from "react-router-dom";
import {
  useVehicles
} from "../context/VehicleContext.jsx";
function Dashboard() {
  const navigate = useNavigate();
  const {
    favorites,
    compare
  } = useVehicles();
  const user =
    localStorage.getItem("user") ||
    "User";
  function logout() {
    localStorage.removeItem(
      "user"
    );
    navigate("/");
  }
  return (
    <section className="page-container">
      <div className="page-header">
        <div>
          <h1>
            My Account
          </h1>
          <p>
            Welcome, {user}
          </p>
        </div>
        <button
          type="button"
          className="button danger"
          onClick={logout}
        >
          Logout
        </button>
      </div>
      <div className="account-grid">
        <div className="account-card">
          <h2>
            Favorites
          </h2>
          <strong>
            {favorites.length}
          </strong>
          <p>
            Saved vehicles
          </p>
          <Link to="/favorites">
            View Favorites
          </Link>
        </div>
        <div className="account-card">
          <h2>
            Compare
          </h2>
          <strong>
            {compare.length}
          </strong>
          <p>
            Vehicles selected
          </p>
          <Link to="/compare">
            View Comparison
          </Link>
        </div>
        <div className="account-card">
          <h2>
            Sell
          </h2>
          <strong>
            +
          </strong>
          <p>
            Add a vehicle listing
          </p>
          <Link to="/sell">
            Sell Vehicle
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Dashboard;