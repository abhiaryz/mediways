const mongoose = require("mongoose");

const connectdatabase = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_CONNECT_URI);
    await mongoose.connect(
      "mongodb+srv://ganeshghatti6:tBVJRtseC1Xfczbm@mediways.5bserjh.mongodb.net/?retryWrites=true&w=majority&appName=mediways"
    );

    console.log("db connection successful");
  } catch (error) {
    console.log("db connection failed" + error.message);
  }
};
module.exports = connectdatabase;
