var mongoose = require('mongoose');
var bcrypt   = require('crypto-js');

var userSchema = mongoose.Schema({

    fullName         : String,
    email            : String,

    local            : {
        password     : String
    },

    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },

    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },

    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

userSchema.methods.generateHash = function(password) {
    return CryptoJS.HmacSHA1(password,'key');
};

userSchema.methods.validPassword = function(password) {

    return "";//bcrypt.compareSync(password, this.local.password);
};

userSchema.statics.findByEmailOrQuery = function(email,query,callback) {
    this.findOne( { $or:[ {email:email}, query ]}, callback);
};

module.exports = mongoose.model('User', userSchema);