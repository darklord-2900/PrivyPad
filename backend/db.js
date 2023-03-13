// const mongoose= require('mongoose');

// const mongoURI="mongodb://localhost:27017/"
// const connectToMongo=()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("connected to mongo successfully");
//     })
// }
// module.exports=connectToMongo;
const mongoose = require('mongoose')

const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect("mongodb://localhost:27017/") 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

module.exports = connectToMongo;