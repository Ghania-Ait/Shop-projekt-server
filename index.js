import  express  from "express";
import recordsRoutes from './routes/Records.route.js' ;
import userRoutes from './routes/users.route.js';
import orderRoutes from './routes/Records.route.js'
import cors from 'cors';
import mongoose from 'mongoose';
import connectMongoose from './databaseMongoose.js';
import 'dotenv/config'






// const mongoadresse = process.env.MONGO ?? 'mongodb://localhost:27107/demo';

// mongoose.connect(mongoadresse);

 const uri = process.env.MONGO

const app=express();
const PORT = process.env.PORT || 4001;



connectMongoose(uri)// demander a se connecter avec la nouvelle databaseMongoose
app.use(cors());
app.use(express.json());
app.use(recordsRoutes);
app.use(userRoutes);
app.use(orderRoutes)





 app.listen(PORT, ()=>{
     console.log('The Server is listening... ');
}) 