const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name : String,
    family:String,
    age  : Number,
    group: String
})

module.exports = mongoose.model ('Teacher',teacherSchema)