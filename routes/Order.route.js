import {Router} from 'express';
import {getOrders,postOrders,getOrdersById} from '../src/controller/orderController.js'


const router=new Router();

router.route('/orders')
.get(getOrders)
.post(postOrders);




router.route('/orders/:id')
.get(getOrdersById)
.put()
.delete()

export default router;