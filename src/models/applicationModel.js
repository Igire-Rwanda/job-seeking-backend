import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
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
      "Wordpress Developer",
    ],
  },
});
applicationSchema.pre (/^find/, function (next){
    this.populate({
      path:"User",
      select: "companyName title phone email companyWeb",
  
  });
  this.populate({
    path:"Job",

  });
  
    next ();
  },
  {
    timestamps :true
  });
export default mongoose.model("Application", applicationSchema);
