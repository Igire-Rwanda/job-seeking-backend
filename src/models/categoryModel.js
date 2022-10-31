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
      "Software Developer",
      "Software Engineer",
      "Technical Writer",
      "UI Designer",
      "UX Designer",
      "Virtual Assistant",
      "Web Designer",
      "Wordpress Developer",
    ],
  },
});

export default mongoose.model("Category", categorySchema);
