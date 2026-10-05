import {
  createContext,
  useContext,
  useState
} from "react";
const VehicleContext = createContext(null);
function getSavedData(key) {
  try {
    const saved = localStorage.getItem(key);
    if (!saved) {
      return [];
    }
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    localStorage.removeItem(key);
    return [];
  }
}
export function VehicleProvider({ children }) {
  const [favorites, setFavorites] = useState(() =>
    getSavedData("favoriteVehicles")
  );
  const [compare, setCompare] = useState(() =>
    getSavedData("compareVehicles")
  );
  function toggleFavorite(vehicle) {
    setFavorites((previous) => {
      const exists = previous.some(
        (item) => item.id === vehicle.id
      );
      const updated = exists
        ? previous.filter(
            (item) => item.id !== vehicle.id
          )
        : [...previous, vehicle];
      localStorage.setItem(
        "favoriteVehicles",
        JSON.stringify(updated)
      );
      return updated;
    });
  }
  function toggleCompare(vehicle) {
    setCompare((previous) => {
      const exists = previous.some(
        (item) => item.id === vehicle.id
      );
      if (exists) {
        const updated = previous.filter(
          (item) => item.id !== vehicle.id
        );
        localStorage.setItem(
          "compareVehicles",
          JSON.stringify(updated)
        );
        return updated;
      }
      if (previous.length >= 3) {
        return previous;
      }
      const updated = [
        ...previous,
        vehicle
      ];
      localStorage.setItem(
        "compareVehicles",
        JSON.stringify(updated)
      );
      return updated;
    });
  }
  function isFavorite(id) {
    return favorites.some(
      (item) => item.id === id
    );
  }
  function isCompared(id) {
    return compare.some(
      (item) => item.id === id
    );
  }
  return (
    <VehicleContext.Provider
      value={{
        favorites,
        compare,
        toggleFavorite,
        toggleCompare,
        isFavorite,
        isCompared
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
}
export function useVehicles() {
  const context = useContext(VehicleContext);
  if (!context) {
    throw new Error(
      "useVehicles must be used inside VehicleProvider"
    );
  }
  return context;
}