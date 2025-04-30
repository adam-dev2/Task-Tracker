const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        const MONGO_URI = process.env.MONGO_URI;
        await mongoose.connect(MONGO_URI)
        console.log('db connected')
    }catch(err) {
        console.log('error while connecting db');
    }
}

module.exports = connectDB