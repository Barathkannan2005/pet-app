import React, { useState } from "react";
import "./App.css";

const pets = [
  {
    id: 1,
    name: "Buddy",
    type: "Dog",
    breed: "Pomeranian",
    age: 3,
    description: "Buddy is a playful and affectionate dog who loves belly rubs.",
    image: "https://res.cloudinary.com/dykevnve1/image/upload/v1738170642/WhatsApp_Image_2025-01-28_at_09.57.10_d3ac7a1e_onhwfa.jpg",
  },
  {
    id: 2,
    name: "Whiskers",
    type: "Dog",
    breed: "German Shepherd",
    age: 2,
    description: "A loyal and intelligent dog, great for families.",
    image: "https://res.cloudinary.com/dykevnve1/image/upload/v1738171776/german_dyc5ed.jpg",
  },
  {
    id: 3,
    name: "Rocky",
    type: "Dog",
    breed: "German Shepherd",
    age: 5,
    description: "Rocky loves outdoor adventures and is very energetic.",
    image: "https://res.cloudinary.com/dykevnve1/image/upload/v1738171915/simily_sidsnc.jpg",
  },
  {
    id: 4,
    name: "Luna",
    type: "Cat",
    breed: "Maine Coon",
    age: 1,
    description: "A gentle  with a fluffy coat, Luna loves to cuddle.",
    image: "https://res.cloudinary.com/dykevnve1/image/upload/v1738172009/luna_ivmryv.jpg",
  },
];

function App() {
  const [donationAmount, setDonationAmount] = useState("");
  const [selectedPet, setSelectedPet] = useState(null);
  const [adoptFormVisible, setAdoptFormVisible] = useState(false);
  const [adoptionDetails, setAdoptionDetails] = useState({
    adopterName: "",
    contact: "",
    address: "",
  });

  const handleDonate = (e) => {
    e.preventDefault();
    alert(`Thank you for your donation of $${donationAmount}!`);
    setDonationAmount("");
  };

  const handleLearnMore = (pet) => {
    setSelectedPet(pet);
    setAdoptFormVisible(false); 
  };

  const handleCloseModal = () => {
    setSelectedPet(null);
    setAdoptFormVisible(false);
  };

  const handleAdoptNow = () => {
    setAdoptFormVisible(true);
  };

  const handleFormChange = (e) => {
    setAdoptionDetails({
      ...adoptionDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitAdoption = (e) => {
    e.preventDefault();
    alert(`Thank you, ${adoptionDetails.adopterName}! Your adoption request for ${selectedPet.name} has been submitted.`);
    setAdoptionDetails({ adopterName: "", contact: "", address: "" });
    setAdoptFormVisible(false);
  };

  return (
    <div className="App">
      <section className="hero">
        <h1>WOOF-PET ADOPTION APP</h1>
        <p>Give a  home to a pet in need</p>
        <button className="cta-button">Adopt Now</button>
      </section>

      <section className="donation">
        <h2>Support Our Cause</h2>
        <p>Your donation helps us care for animals </p>
        <form onSubmit={handleDonate}>
          <input
            type="number"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            placeholder="Enter donation amount"
            required
          />
          <button type="submit">Donate Now</button>
        </form>
      </section>

      <section className="pet-cards">
        <h2>Pets Available for Adoption</h2>
        <div className="card-container">
          {pets.map((pet) => (
            <div key={pet.id} className="card">
              <img src={pet.image || "/placeholder.svg"} alt={pet.name} />
              <h3>{pet.name}</h3>
              <p>{pet.type} - {pet.breed}</p>
              <p>Age: {pet.age} years</p>
              <button onClick={() => handleLearnMore(pet)}>Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {selectedPet && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedPet.image} alt={selectedPet.name} />
            <h2>{selectedPet.name}</h2>
            <p><strong>Type:</strong> {selectedPet.type}</p>
            <p><strong>Breed:</strong> {selectedPet.breed}</p>
            <p><strong>Age:</strong> {selectedPet.age} years</p>
            <p>{selectedPet.description}</p>
            <button className="adopt-button" onClick={handleAdoptNow}>Adopt Now</button>

            {adoptFormVisible && (
              <form className="adopt-form" onSubmit={handleSubmitAdoption}>
                <h3>Adopt {selectedPet.name}</h3>
                <input
                  type="text"
                  name="adopterName"
                  value={adoptionDetails.adopterName}
                  onChange={handleFormChange}
                  placeholder="Your Name"
                  required
                />
                <input
                  type="text"
                  name="contact"
                  value={adoptionDetails.contact}
                  onChange={handleFormChange}
                  placeholder="Your Contact Info"
                  required
                />
                <input
                  type="text"
                  name="address"
                  value={adoptionDetails.address}
                  onChange={handleFormChange}
                  placeholder="Your Address"
                  required
                />
                <button type="submit">Submit Adoption Request</button>
              </form>
            )}
          </div>
        </div>
      )}

      <footer className="footer">
        <p>&copy; 2025 Adopt a Pet. All rights reserved.</p>
        <p>Follow us on social media:</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
