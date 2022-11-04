import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({

profile: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Profile"
},
skills: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Skills",
},

category: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Category",
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
      path:"Profile",
      select: "companyName title phone email companyWeb",
  
  });
  this.populate({
    path:"Skills",

  });
  this.populate({
    path:"Category",
    
  
  });
  
    next ();
  },
  {
    timestamps :true
  });
export default mongoose.model('Job', jobSchema);
