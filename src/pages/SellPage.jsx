import { useState } from "react";
function SellVehicle() {
  const [form, setForm] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    km: "",
    fuel: "",
    transmission: "",
    location: "",
    description: ""
  });
  const [message, setMessage] = useState("");
  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    const oldListings = JSON.parse(
      localStorage.getItem("sellerListings") || "[]"
    );
    const newListing = {
      id: Date.now(),
      ...form
    };
    localStorage.setItem(
      "sellerListings",
      JSON.stringify([...oldListings, newListing])
    );
    setMessage("Vehicle listing submitted successfully.");
    setForm({
      brand: "",
      model: "",
      year: "",
      price: "",
      km: "",
      fuel: "",
      transmission: "",
      location: "",
      description: ""
    });
  }
  return (
    <section className="page-container">
      <div className="page-header">
        <div>
          <h1>Sell Your Vehicle</h1>
          <p>
            Enter your vehicle details to create a listing.
          </p>
        </div>
      </div>
      <form className="form-card" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div>
            <label htmlFor="brand">Brand</label>
            <input
              id="brand"
              name="brand"
              value={form.brand}
              onChange={handleChange}
              placeholder="Example: Maruti"
              required
            />
          </div>
          <div>
            <label htmlFor="model">Model</label>
            <input
              id="model"
              name="model"
              value={form.model}
              onChange={handleChange}
              placeholder="Example: Swift"
              required
            />
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <input
              id="year"
              type="number"
              name="year"
              value={form.year}
              onChange={handleChange}
              placeholder="2022"
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="650000"
              required
            />
          </div>
          <div>
            <label htmlFor="km">Kilometres</label>
            <input
              id="km"
              type="number"
              name="km"
              value={form.km}
              onChange={handleChange}
              placeholder="30000"
              required
            />
          </div>
          <div>
            <label htmlFor="fuel">Fuel</label>
            <select
              id="fuel"
              name="fuel"
              value={form.fuel}
              onChange={handleChange}
              required
            >
              <option value="">Select fuel</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
            </select>
          </div>
          <div>
            <label htmlFor="transmission">Transmission</label>
            <select
              id="transmission"
              name="transmission"
              value={form.transmission}
              onChange={handleChange}
              required
            >
              <option value="">Select transmission</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Hyderabad"
              required
            />
          </div>
        </div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="6"
          value={form.description}
          onChange={handleChange}
          placeholder="Enter vehicle condition, features and other details"
        />
        <button
          type="submit"
          className="button primary"
        >
          Submit Listing
        </button>
        {message && (
          <p className="success-message">
            {message}
          </p>
        )}
      </form>
    </section>
  );
}
export default SellVehicle;