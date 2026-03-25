const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/yourDatabaseName');
    console.log('MongoDB Connected successfully!');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};


module.exports = connectDB;