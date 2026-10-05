import { Link } from "react-router-dom";
import {
  useVehicles
} from "../context/VehicleContext.jsx";
function Favorites() {
  const {
    favorites,
    toggleFavorite
  } = useVehicles();
  return (
    <section className="page-container">
      <div className="page-header">
        <div>
          <h1>
            Favorites
          </h1>
          <p>
            Vehicles you have saved.
          </p>
        </div>
      </div>
      {favorites.length === 0 ? (
        <div className="empty-box">
          <h2>
            No favorite vehicles
          </h2>
          <p>
            Add vehicles to favorites from the Buy Vehicle page.
          </p>
          <Link
            to="/vehicles"
            className="button primary"
          >
            Browse Vehicles
          </Link>
        </div>
      ) : (
        <div className="vehicle-grid">
          {favorites.map(
            (vehicle) => (
              <div
                key={vehicle.id}
                className="vehicle-card"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.model}
                />
                <div className="vehicle-info">
                  <small>
                    {vehicle.brand}
                  </small>
                  <h3>
                    {vehicle.model}
                  </h3>
                  <strong className="price">
                    ₹{vehicle.price.toLocaleString("en-IN")}
                  </strong>
                  <div className="vehicle-actions">
                    <Link
                      to={`/vehicles/${vehicle.id}`}
                      className="button primary"
                    >
                      View Details
                    </Link>
                    <button
                      type="button"
                      className="button secondary"
                      onClick={() =>
                        toggleFavorite(vehicle)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </section>
  );
}
export default Favorites;