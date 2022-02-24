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


// export const postOrders = async (req, res) => {
//     const data = req.body;
//     // Testen ob data alle infos enthält: title, artist, year, cover, price
//     if (!data.recordId || !data.userId || !data.quantite) {
//         return res.status(400).send('Felende Daten');
//     }
    
//     const order = new orderModel({
//         recordId: data.recordId,
//         userId: data.userId,
//         quantity: data.quantity,
//     });

//     await order.save();

//     res.send(order);
// }


