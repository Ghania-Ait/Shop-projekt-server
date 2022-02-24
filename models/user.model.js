import mongoose from 'mongoose';


const userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email: String,
    passWord:String,
  })
  
  
  const userModel= mongoose.model('User', userSchema, 'User');
  export default userModel;