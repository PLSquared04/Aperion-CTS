const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    item_name: String,
    img:String,
    price: Number,
    stock: Number,
    color: String,
    manufacture_date:Date,
    expiry_date:Date
})

const ProductModel = mongoose.model("Product_Details",ProductSchema);

module.exports = ProductModel;