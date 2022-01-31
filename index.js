import  express  from "express";
import recordsRoutes from './routes/Records.route.js' ;
import userRoutes from './routes/users.route.js'



const app=express();
const port=5000;
app.use(express.json());
app.use(recordsRoutes);
app.use(userRoutes)





app.listen(port, ()=>{
    console.log('The Server is listening... ');
}) 