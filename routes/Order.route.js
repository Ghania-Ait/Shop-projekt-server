import {Router} from 'express';
import {getOrders,postOrders,getOrdersById,updateOrder,deleteOrder } from '../src/controller/orderController.js'


const router=new Router();

router.route('/orders')
.get(getOrders)
.post(postOrders);




router.route('/orders/:id')
.get(getOrdersById)
.put(updateOrder)
.delete(deleteOrder )

export default router;