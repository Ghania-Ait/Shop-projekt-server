import mongoose from 'mongoose';


const recordSchema=new mongoose.Schema({
    title:String,
    artist:String,
    year:Number,
    price:String,
    cover:String
    

    })
  
  
  const recordModel= mongoose.model('Record', recordSchema, 'Record');
  export default recordModel;