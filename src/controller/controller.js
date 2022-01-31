
import db from '../../database.js'




export const getRecords=(req,res)=>{
    const records=db.data.records;
    res.send(records)
}


export const postRecords=(req,res)=>{
 const data = req.body;
 if (!data.title || !data.artist || !data.year || !data.price){
     res.status(400).send('Falsche Daten')
 }

 const record={
     title: data.title,
     artist:data.artist,
     year:data.year,
     price:data.price,
     cover:'',
 }
 db.data.records.push(record);

 db.write();
 res.send(record);
}

export const getTop10=(req, res) => {
    res.send('Not yet implemented');
}

export const getUsers=(req,res)=>{
    res.send('users get request')
}