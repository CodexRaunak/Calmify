const mongoose = require("mongoose");

async function connectDb() {
    try{
       await mongoose.connect(process.env.MONGODB_URI);
        console.log("connect to DB");
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectDb;