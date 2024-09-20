const mongoose = require('mongoose')

const Notes = new mongoose.Schema({
        FullName : {
            type : String,
            required : [true, 'Please, Provide the Full name'],
            maxlength : 60,
            trim: true,
        },
        Email : {
            type : String,
            required : [true, 'Please, Provide your Email'],
            maxlength : 100,
            trim: true,
            unique: true,
            lowercase: true,
        },
        PhoneNumber : {
            type : String,
            required : [true, 'Please, Provide your Email'],
            maxlength : 25
        },
    },
    {timestamps : true}
)


module.exports = mongoose.model('Notes',Notes)

