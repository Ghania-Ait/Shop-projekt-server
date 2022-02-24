
import userModel from '../../models/user.model.js';






export const getUsers= async (req, res)=>{
    const users= await userModel.find({})
    res.json(users)
}




export const getUserById= async(req,res)=>{
    const id= req.params.id;

    const user= await userModel.findById(id);
    if(!user){
        return res.status(400).send('Nicht gefunden')
    }

    res.json(user);
}


export const postUsers= async (req, res)=>{
    const data = req.body;
    if (!data.firstName || !data.lastName || !data.email || !data.passWord){
        res.status(400).send('Falsche Daten')
    }
   
    const User={
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        passWord: data.passWord,
        
    }
    const newUser=new userModel(data);
    await newUser.save();
   //  db.data.records.push(record);
   
   //  db.write();
    res.send('new user created .....');
   }


   export const deleteUser = async (req, res) => {
       const {id}=req.params;

       try{
           const user=await userModel.deleteOne({_id: id});
           res,json(user)
       }catch(err){
           return res.status(400).send('Nicht gefunden mit id: '+id+' - '+err)
       }
   }





   export  const updateUser= async (req, res)=> {
    
    try {const id= req.params.id;
        console.log(req.body);
        
        const user = await userModel.findByIdAndUpdate(id , req.body, {
            new: true,
            runValidators: true,
            context: 'query'
            } );
        res.json(user);
        
    } catch (error) {
        console.log(error);
    }
};