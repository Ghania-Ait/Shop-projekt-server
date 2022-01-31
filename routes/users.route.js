import {Router} from 'express';
import {getUsers} from '../src/controller/controller.js'


const router=new Router();

router.get('/users',getUsers);

export default router;