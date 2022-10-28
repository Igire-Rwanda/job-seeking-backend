import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({

  cvLink: {
    type: String,
    unique: true
  },
  salaryExpectactions: {
    type: String,
    
  },
  yearsOfExperience: {
    type: Number,
  },
  country: {
    type: String,
  },
  skills: {
    type: String,
   
  },
 SpokenLanguages: {
    type: String,
   enum:["English","French","Swahili"]
  },
  EmploymentMode: {
    type: String,
    enum :["Remote","Office","Part-Time","Full-Time"]
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  CompanyName: {
    type: String,
    
  },
  LinkedlnProfile: {
    type: String,
    Unique: true
  },
  JobTitle: {
    type: String,
   
  },
  CompanyWeb: {
    type: String,
    
  },
}, {
  timestamps: true
});
export default mongoose.model('Profile', userSchema);


