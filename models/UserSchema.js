const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength:3, maxlength: 12},
    email: {type: String, required: true, unique: true},
   
},
{ timestamps: { Created: 'created_at'} })


module.exports = mongoose.model('userModel', userSchema)
