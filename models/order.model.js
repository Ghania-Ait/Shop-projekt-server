import mongoose from 'mongoose';


const orderSchema=new mongoose.Schema({
    recordId:mongoose.Types.ObjectId,
    userId:mongoose.Types.ObjectId,
    quantite:String,
  })
  
  
  const orderModel= mongoose.model('Order', orderSchema, 'Order');
  export default orderModel;