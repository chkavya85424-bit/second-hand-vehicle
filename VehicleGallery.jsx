function VehicleGallery({ vehicle }) {
  return (
    <div className="vehicle-gallery">
      <img
        className="main-gallery-image"
        src={vehicle.image}
        alt={vehicle.model}
      />
      <div className="gallery-text">
        <p>{vehicle.brand}</p>
        <h2>{vehicle.model}</h2>
      </div>
    </div>
  );
}
export default VehicleGallery;