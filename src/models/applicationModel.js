import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Application",
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

export default mongoose.model("Application", applicationSchema);