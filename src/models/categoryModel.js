import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  
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
}
, {
  timestamps :true
});

export default mongoose.model("Category", categorySchema);
