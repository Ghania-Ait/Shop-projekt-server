import orderModel from "../../models/order.model.js";


export const getOrders= async(req, res) => {
    const orders=await orderModel.find({});
    res,json(orders)
}


export const postOrders= async(req, res) => {
    const data= req.body;
    if (!data.recordId || !data.userId || !data.quantity){
        res.status(400).send('Falsche Daten')
    }
const order={
    quantity:data.quantity,
    recordId: data.recordId,
    userId: data.userId
  
}
const newOrder =new orderModel(data);
await newOrder.save()
res.send('New order created .....')

}


export const getOrdersById=async(req, res) => {
    const id= req.params.id;

    try{
        const order = await orderModel.findByIdAndUpdate(id , req.body, {
            new: true,
            runValidators: true,
            context:'query'

        });
        res.json(order)
    }catch(err){
        console.log(error);
    }
};

export const updateOrder= async(req, res) => {
    try{
        const id= req.params.id;
        const order=await orderModel.findByIdAndDelete(id, req.body, {
            new:true,
            runValidators: true,
            context:'query'
        })
        res.json(order)
    }catch(error){console.log(error);}
}
