const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    category: String,
    image: [String],
    discountedPrice: Number,
    originalPrice: Number,
    brand: String,
    dprice:Number,
    oprice:Number,
  },
  {
    versionKey: false,
  }
);

const productModel = model("product", productSchema);

module.exports = productModel