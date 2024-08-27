const mongoose= require('mongoose')

const mongoURI= "mongodb://localhost:27017/?directConnection=true"

// const coonectToMongo = () =>{
//     mongoose.connect(mongoURI, () =>{
//         console.log("Connected to Mongo Sucessfully");
//     })
// }
// const mongoose = require('mongoose');

async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log('Connected to the database successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

// connectToDatabase();


module.exports = connectToMongo;
