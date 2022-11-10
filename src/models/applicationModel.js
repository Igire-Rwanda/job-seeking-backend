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
  name: {
    type: String,
  },
  jobApplicationTitle:{
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
  address: { type: String, default: "Rwanda" },
  phone: String,
  category: String,
  email: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  status: {
    type: String,
    enum: ["pending", "declined","accepted"],
    required: [true, "status is required"],
    default: "pending",
  },
  appliedOn: {
    type: String,
    default: Date.now(),
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
