import  express  from "express";
import {getRecords,postRecords } from './src/controller/controller.js'
const app=express();


app.get('/records', getRecords);

app.post('/records',postRecords);


const port=5000;
app.listen(port, ()=>{
    console.log('The Server is listning... ');
}) 