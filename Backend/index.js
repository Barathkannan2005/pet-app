const express = require('express');
const connectDB = require("./db.js");
const app = express();
const itemModel = require("./models/items.js");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

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
        description: "A gentle with a fluffy coat, Luna loves to cuddle.",
        image: "https://res.cloudinary.com/dykevnve1/image/upload/v1738172009/luna_ivmryv.jpg",
    },
];

// Endpoint to get pets
app.get("/api/pets", (req, res) => {
    res.json(pets);
});

// Donation route
app.post("/api/donate", (req, res) => {
    const { amount } = req.body;
    if (amount > 0) {
        res.status(200).send(`Thank you for your donation of $${amount}!`);
    } else {
        res.status(400).send("Invalid donation amount.");
    }
});

// Adoption route
app.post("/api/adopt", (req, res) => {
    const { adopterName, contact, address, petId } = req.body;
    
    if (adopterName && contact && address && petId) {
        res.status(200).send(`Thank you, ${adopterName}! Your adoption request has been submitted.`);
    } else {
        res.status(400).send("All fields are required.");
    }
});

// Items route to fetch items from MongoDB (example)
app.get('/', async (req, res) => {
    try {
        const items = await itemModel.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch items" });
    }
});

// Start server
app.listen(5004, () => {
    console.log("App is running ");
});
