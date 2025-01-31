const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    // console.log(`MongoDB URL: ${process.env.MONGO_URL}`);
    
    // await mongoose.connect(process.env.MONGO_URL, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
