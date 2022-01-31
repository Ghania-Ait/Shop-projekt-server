import {Router} from 'express';
import {getRecords,postRecords} from '../src/controller/controller.js';

const router=new Router();


router.get('/records', getRecords);

router.post('/records',postRecords);

export default router;