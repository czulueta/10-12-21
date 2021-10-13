const mongoose = require("mongoose")
const Schema = mongoose.Schema

const scriptSchema = new Schema({
    verse: {
        type: String,
        required: true 
    },
    commments: {
        type: String  
    }
})

module.exports = mongoose.model("Script", scriptSchema)