const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    iamge: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Category", categorySchema);
