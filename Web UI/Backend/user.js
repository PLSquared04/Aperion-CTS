const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    uid: String,
    user_name: String,
    address: String,
    DOB: Date,
    cart: [
        {
            item_id: String,
            price: Number,
            quantity: Number

        }
    ],
    products: [
        {
            item_id: String,
            price: Number,
            quantity: Number

        }
    ]
});

const userModel = mongoose.model("user_details", userSchema);

module.exports = userModel;