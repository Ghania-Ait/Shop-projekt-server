import {Router} from 'express';
import {getOrder} from '../src/controller/controller.js'


const router=new Router();

router.get('/order',getOrder);

export default router;