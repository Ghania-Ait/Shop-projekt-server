import {Router} from 'express';
import {getOrders} from '../src/controller/controller.js'


const router=new Router();

router.get('/orders')
.get(getOrders)
.post(postOrders);

export default router;