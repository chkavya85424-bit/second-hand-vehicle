import { Link } from "react-router-dom";
import {
  useVehicles
} from "../context/VehicleContext.jsx";
function Compare() {
  const {
    compare,
    toggleCompare
  } = useVehicles();
  return (
    <section className="page-container">
      <div className="page-header">
        <div>
          <h1>
            Compare Vehicles
          </h1>
          <p>
            Compare selected vehicles side by side.
          </p>
        </div>
      </div>
      {compare.length === 0 ? (
        <div className="empty-box">
          <h2>
            No vehicles selected
          </h2>
          <p>
            Select vehicles from the Buy Vehicle page.
          </p>
          <Link
            to="/vehicles"
            className="button primary"
          >
            Browse Vehicles
          </Link>
        </div>
      ) : (
        <div className="compare-wrapper">
          <table className="compare-table">
            <thead>
              <tr>
                <th>
                  Details
                </th>
                {compare.map(
                  (vehicle) => (
                    <th key={vehicle.id}>
                      {vehicle.brand}{" "}
                      {vehicle.model}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Year
                </td>
                {compare.map(
                  (vehicle) => (
                    <td key={vehicle.id}>
                      {vehicle.year}
                    </td>
                  )
                )}
              </tr>
              <tr>
                <td>
                  Price
                </td>
                {compare.map(
                  (vehicle) => (
                    <td key={vehicle.id}>
                      ₹{vehicle.price.toLocaleString("en-IN")}
                    </td>
                  )
                )}
              </tr>
              <tr>
                <td>
                  Kilometres
                </td>
                {compare.map(
                  (vehicle) => (
                    <td key={vehicle.id}>
                      {vehicle.km} km
                    </td>
                  )
                )}
              </tr>
              <tr>
                <td>
                  Fuel
                </td>
                {compare.map(
                  (vehicle) => (
                    <td key={vehicle.id}>
                      {vehicle.fuel}
                    </td>
                  )
                )}
              </tr>
              <tr>
                <td>
                  Transmission
                </td>
                {compare.map(
                  (vehicle) => (
                    <td key={vehicle.id}>
                      {vehicle.transmission}
                    </td>
                  )
                )}
              </tr>
              <tr>
                <td>
                  Location
                </td>
                {compare.map(
                  (vehicle) => (
                    <td key={vehicle.id}>
                      {vehicle.location}
                    </td>
                  )
                )}
              </tr>
              <tr>
                <td />
                {compare.map(
                  (vehicle) => (
                    <td key={vehicle.id}>
                      <button
                        type="button"
                        className="button danger"
                        onClick={() =>
                          toggleCompare(vehicle)
                        }
                      >
                        Remove
                      </button>
                    </td>
                  )
                )}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
export default Compare;