const mongoose = require ('mongoose');
 
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://baraths2023cse:Barath@cluster0.cahnx.mongodb.net/testdb',);
        console.log(`MongoDB Connected:`);
        
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;