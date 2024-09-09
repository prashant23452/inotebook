const mongoose= require('mongoose')

const mongoURI= "mongodb://localhost:27017/inotebook?directConnection=true"



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

module.exports = connectToMongo;
