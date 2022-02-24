import mongoose from 'mongoose';

function connectMongoose(url){
mongoose.connect(url).then (()=>{
    console.log('Connected to database')
    

    }).catch((err)=>{
        console.error(err);
    
})
}
export default connectMongoose;