
// import db from '../../database.js'
import recordModel from '../../models/record.model.js'




export const getRecords=async (req,res)=>{
    // const records=db.data.records;
    
    const records= await recordModel.find({})
    res.json(records);
}


export const getRecordById= async(req,res)=>{
    const id= req.params.id;

    const record= await recordModel.findById(id);
    if(!record){
        return res.status(400).send('Nicht gefunden')
    }

    res.json(record);
}


export const postRecords= async (req, res)=>{
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
 const newRecord=new recordModel(data);
 await newRecord.save();
//  db.data.records.push(record);

//  db.write();
 res.send('new Record created .....');
}


export const deleteRecord = async (req, res) => {
    const {id}=req.params;
    try{
        const record = await recordModel.deleteOne({_id: id});
        res.json(record);
    }catch(err){
        return res.status(400).send('Nicht gefunden mit id: '+id+' - '+err)
    }
}


export  const updateRecord= async (req, res)=> {
    
    try {const id= req.params.id;
        console.log(req.body);
        
        const record = await recordModel.findByIdAndUpdate(id , req.body, {
            new: true,
            runValidators: true,
            context: 'query'
            } );
        res.json(record);
        
    } catch (error) {
        console.log(error);
    }
};








export const getTop10=(req, res) => {
    res.send('Not yet implemented');
}

export const getUsers=(req,res)=>{
    res.send('users get request')
}
export const getOrder=(req,res)=>{
    res.send('Order get request')
}