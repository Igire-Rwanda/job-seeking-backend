import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
 
  JobMaker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required : true,
    
  },
 
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
 profile: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Profile',
  required : true,
 },

}, {
  timestamps: true
});

applicationSchema.pre (/^find/, function (next){
  this.populate({
    path:"user",
    select: "firstname lastname username email phone role",

}).populate({
  path:"profile",
  select: "cv educationLevel yearsOfExperience LinkedlnProfile",
}).populate({
  path:"JobMaker",
  select: "jobTitle companyName",
});
  next ();
});
export default mongoose.model('application',applicationSchema);


