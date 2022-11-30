import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
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


 
  LinkedlnProfile: {
    type: String,
    Unique: true
  },
  cv: {
    type: String,
  },

}, {
  timestamps: true
});

profileSchema.pre (/^find/, function (next){
  this.populate({
    path:"user",
    select: "firstname lastname username email phone role",

});
  next ();
});

export default mongoose.model('Profile', profileSchema);


