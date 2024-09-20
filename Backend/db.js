const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const mongoUri = 'mongodb://localhost:27017/codenest';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//Get Default connection
//Mongoogse maintains a default connection object representing the mongoDB connection
const db = mongoose.connection;

//Define event listeners from database connection

db.on("connected" , () => {
    console.log("Connected to mongoDB server");
})

db.on("error" , (err) => {
    console.error("MongoDB connection error: ",err);
});

db.on("disconnected", ()=>{
    console.log("Mongoose Disconnected");
})


//Export the database connection
module.exports = db;


