import {Router} from 'express';
import {getUsers,postUsers,getUserById, deleteUser,updateUser} from '../src/controller/userController.js'


const router=new Router();




router.route('/users')
.get(getUsers)
.post(postUsers);


router.route('/users/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)


export default router;