import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({

  
  profileImage: {
    type: String,
 },
 
 address: {
  type: String,
},
country: {
  type: String,
},
  educationLevel: {
    type: String,
    
  },
  yearsOfExperience: {
    type: Number,
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

profileSchema.pre (/^find/, function (next){
  this.populate({
    path:"profileId",
    select: "companyName title phone email companyWeb",

});
  next ();
});

export default mongoose.model('Profile', profileSchema);


