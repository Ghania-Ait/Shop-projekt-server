import  express  from "express";
import recordsRoutes from './routes/Records.route.js' 



const app=express();
const port=5000;
app.use(express.json());
app.use(recordsRoutes);





app.listen(port, ()=>{
    console.log('The Server is listening... ');
}) 