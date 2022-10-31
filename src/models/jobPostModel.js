import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job"
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
export default mongoose.model('Job', jobSchema);
