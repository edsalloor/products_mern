import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    require: false
  }
}, {
  timestamps: true // automatically create fields for createdAt and updatedAt
});

const Product = mongoose.model("Product", productSchema);

export default Product;
