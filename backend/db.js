const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://ahsanbilal712:q06ZWeuLHrSMspSb@cluster0.5yv2uvj.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDb = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');

        // Fetch the 'food_items' collection using Mongoose's model
        const FoodItem = mongoose.model('FoodItem', new mongoose.Schema({}), 'food_items');
        
        // Use Mongoose's find() method to fetch all documents from the collection
        const fetchedData = await FoodItem.find({});
        
        // Output the fetched data
       // console.log('Fetched data:', fetchedData);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = mongoDb;
