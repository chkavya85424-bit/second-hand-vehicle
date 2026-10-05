import { Link } from "react-router-dom";
import vehicles from "../data/vehicles.json";
import {
  useVehicles
} from "../context/VehicleContext.jsx";
function Home() {
  const {
    favorites,
    compare
  } = useVehicles();
  const recentVehicles = vehicles.slice(0, 4);
  return (
    <div className="dashboard-home">
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>
            Welcome to your second-hand vehicle marketplace.
          </p>
        </div>
        <Link
          to="/sell"
          className="button primary"
        >
          + Add Vehicle
        </Link>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search cars, bikes or brands..."
        />
        <Link
          to="/vehicles"
          className="button primary"
        >
          Search
        </Link>
      </div>
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-symbol">🚗</span>
          <div>
            <p>Total Vehicles</p>
            <h2>{vehicles.length}</h2>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-symbol">♡</span>
          <div>
            <p>Favorites</p>
            <h2>{favorites.length}</h2>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-symbol">⇄</span>
          <div>
            <p>Compared</p>
            <h2>{compare.length}</h2>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-symbol">📍</span>
          <div>
            <p>Locations</p>
            <h2>4</h2>
          </div>
        </div>
      </div>
      <section className="content-section">
        <div className="section-heading">
          <div>
            <h2>Quick Actions</h2>
            <p>Common actions you may need.</p>
          </div>
        </div>
        <div className="quick-grid">
          <Link
            to="/vehicles"
            className="quick-card"
          >
            <strong>Browse Vehicles</strong>
            <span>Find a used vehicle</span>
          </Link>
          <Link
            to="/sell"
            className="quick-card"
          >
            <strong>Sell Vehicle</strong>
            <span>Create a new listing</span>
          </Link>
          <Link
            to="/favorites"
            className="quick-card"
          >
            <strong>Favorites</strong>
            <span>See saved vehicles</span>
          </Link>
          <Link
            to="/compare"
            className="quick-card"
          >
            <strong>Compare</strong>
            <span>Compare vehicles</span>
          </Link>
        </div>
      </section>
      <section className="content-section">
        <div className="section-heading">
          <div>
            <h2>Recently Added</h2>
            <p>Latest sample vehicle listings.</p>
          </div>
          <Link to="/vehicles">
            View All
          </Link>
        </div>
        <div className="home-vehicle-grid">
          {recentVehicles.map((vehicle) => (
            <Link
              key={vehicle.id}
              to={`/vehicles/${vehicle.id}`}
              className="home-vehicle-card"
            >
              <img
                src={vehicle.image}
                alt={vehicle.model}
              />
              <div className="home-vehicle-info">
                <small>
                  {vehicle.brand}
                </small>
                <h3>
                  {vehicle.model}
                </h3>
                <strong>
                  ₹{vehicle.price.toLocaleString("en-IN")}
                </strong>
                <div className="mini-details">
                  <span>{vehicle.year}</span>
                  <span>{vehicle.km} km</span>
                  <span>{vehicle.fuel}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Home;