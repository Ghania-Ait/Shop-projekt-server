import mongoose from 'mongoose';


const orderSchema=new mongoose.Schema({
    //recordId:mongoose.Types.ObjectId,
   // userId:mongoose.Types.ObjectId,
   
    recordId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'recordModel'
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'userModel'
        

        },
        quantity:Number
        
  })
  
  
  const orderModel= mongoose.model('Order', orderSchema, 'Order');
  export default orderModel;