import orderModel from "../../models/order.model";


export const getOrders= async(req, res) => {
    const orders=await orderModel.find({});
    res,json(orders)
}