import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  title: {
    type: String,
  },
  type: {
    type: String,
    enum: [
      "BI And Internal Systems",
      "Engineering",
      "Architecture and Marketing ",
      "Customer Operations",
      "Finance and Legal ",
      "Wordpress Developer"
    ],
  },
});

export default mongoose.model("Category", categorySchema);
