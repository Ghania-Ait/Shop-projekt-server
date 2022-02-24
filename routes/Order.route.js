import {Router} from 'express';
import {getOrders,postOrders} from '../src/controller/orderController.js'


const router=new Router();

router.route('/orders')
.get(getOrders)
.post(postOrders);

export default router;