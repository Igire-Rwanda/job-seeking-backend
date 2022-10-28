import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({

  title: {
    type: String,
  },
  companyName: {
    type: String,
    unique: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  deadline: {
    type: Date,
    
  },
 description: {
    type: String,
   
  },
  employmentMode: {
     type: String,
    enum:["remote","0ffice","partTime","fullTime",]
   }}
  );
export default mongoose.model('Job', jobSchema);
