const mongoose = require('mongoose');
const mongoURI = process.env.mongoURI || "mongodb+srv://ghimirra:3XcogILnPtPuYrFS@cluster0.ifbve7b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected successfully");
    }
    catch (error) {
        console.error("Could not connect to MongoDB:", error);
    }
}

module.exports = connectToMongo;
