import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job"
 },
 user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
},
skills: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Skills",
},
  jobCategory: {
    type: String,
  },
  companyDescription: {
    type: String,
    unique: true
  },
  jobDescription: {
    type: String,
    unique: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  jobRequirements: {
    type: String,
    
  },
 howToApply: {
    type: String,
   
  },
  vacancyType: {
     type: String,
    enum:["remote","0ffice","partTime","fullTime",]
   }}
  );
  jobSchema.pre (/^find/, function (next){
    this.populate({
      path:"User",
      select: "companyName title phone email companyWeb",
  
  });
  this.populate({
    path:"Skills",
    select: "title type",
  
  });
  
    next ();
  });
export default mongoose.model('Job', jobSchema);
