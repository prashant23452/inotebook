


// async function connectToMongo() {
//   try {
//     await mongoose.connect(process.env.URI, {
//     //   useNewUrlParser: true,
//     //   useUnifiedTopology: true,
//     });
//     console.log('Connected to the database successfully');
//   } catch (error) {
//     console.error('Error connecting to the database:', error);
//   }
// }
require('dotenv').config();
const mongoose = require('mongoose');

const connectToMongo = () => {
  mongoose.connect(process.env.URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ Error connecting to DB:", err));
};



module.exports = connectToMongo;
