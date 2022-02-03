import  express  from "express";
import recordsRoutes from './routes/Records.route.js' ;
import userRoutes from './routes/users.route.js'
import cors from 'cors'



const app=express();
const PORT = process.env.PORT || 4001;


app.use(cors());
app.use(express.json());
app.use(recordsRoutes);
app.use(userRoutes)





app.listen(PORT, ()=>{
    console.log('The Server is listening... ');
}) 