var mongoose = require('mongoose');
var postsSchema = require('./post');

postsSchema.statics = {
    create : function(data, cb) {
        var post = new this(data);
        post.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var postsModel = mongoose.model('posts', postsSchema);
module.exports = postsModel;