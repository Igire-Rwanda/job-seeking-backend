import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
 },
  fullname: {
    type: String,
  },
  phone: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true
  },
  role:{
    type:String,
    enum :["Admin","Client","Talent"]
  },
  

}, {
  timestamps: true
});

export default mongoose.model('User', userSchema);
