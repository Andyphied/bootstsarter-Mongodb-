var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postsSchema = new Schema({
    title :{
        type: String,
        unique : false,
        required : true
    },
    content : {
        type: String,
        unique : false,
        required : true
    }
}, {
    timestamps: true
});

module.exports = postsSchema;