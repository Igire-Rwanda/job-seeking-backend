import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({

  
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "application"
 },
  jobId: {
    type: Number,
    unique: true
  },
  userTalent: {
    type: String,
    
  },
 
 
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
 

}, {
  timestamps: true
});

profileSchema.pre (/^find/, function (next){
  this.populate({
    path:"applicationId",
    select: "companyName title phone email companyWeb",

});
  next ();
});

export default mongoose.model('application',applicationSchema);


