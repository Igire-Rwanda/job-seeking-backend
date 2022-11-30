import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  companyLogo: {
    type: String,
 },
 jobDeadLine:{
type:String,
 },
  jobTitle: {
    type: String,
 },
  companyName: {
    type: String,
  },

  jobDescription:{
    type: String,
    
  },
  companyWebsite:{
    type: String,
  },
  
  jobRequirements: {
    type: String,
    
  },
  isActive: {
    type: Boolean,
    default: true
  },
 howToApply: {
    type: String,
   
  }, 
  emplomentMode: {
     type: String,
    enum:["remote","office","partTime","fullTime"],
    default:"remote"
   },
  }, {
    timestamps: true
  });
  
  jobSchema.pre (/^find/, function (next){
    this.populate({
      path:"user",
      select: "firstname lastname username email phone role",
  
  });
    next ();
  });
export default mongoose.model('Job', jobSchema);
