const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

})

const User = mongoose.model("User", userSchema)
exports.User = User