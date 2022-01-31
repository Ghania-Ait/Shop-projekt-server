import {Router} from 'express';
import {getRecords,postRecords,getTop10} from '../src/controller/controller.js';

const router=new Router();
router.route('/records')
.get(getRecords)
.post(postRecords);


// router.get('/records', getRecords);

// router.post('/records',postRecords);
router.get('/records/top10', getTop10)

export default router;