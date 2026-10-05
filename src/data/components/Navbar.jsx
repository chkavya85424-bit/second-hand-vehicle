import { Link } from "react-router-dom";
import { useVehicles } from "../context/VehicleContext";
function Navbar() {
  const { favorites, compare } = useVehicles();
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo">
          <span>Vehicle</span>Hub
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/vehicles">Buy Vehicle</Link>
          <Link to="/sell">Sell Vehicle</Link>
          <Link to="/compare">
            Compare
            {compare.length > 0 && (
              <small>{compare.length}</small>
            )}
          </Link>
          <Link to="/favorites">
            Favorites
            {favorites.length > 0 && (
              <small>{favorites.length}</small>
            )}
          </Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;