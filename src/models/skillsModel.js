import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema({
  skills: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Skills",
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
      "Data Entry Specialists",
      "Video Editors",
      "Data Analyst",
      "Shopify Developer",
      "Ruby on Rails Developer",
      "Android Developer",
      "Bookkeeper",
      "Content Writer",
      "Copywriter",
      "Database Administrator",
      "Data Scientist",
      "Front-End Developer",
      "Game Developer",
      "Graphic Designer",
      "iOS Developer",
      "Java Developer",
      "Social Media Manager",
    ],
  },
});

export default mongoose.model("Skills", skillsSchema);
