import mongoose from 'mongoose';
import userModel from './models/user.model.js';
import recordModel from './models/record.model.js';
import { faker } from "@faker-js/faker";

export function connectMongoose(url){
mongoose.connect(url).then (()=>{
    console.log('Connected to database')
    

    }).catch((err)=>{
        console.error(err);
    
})
}


export async function seedTestData() {
    await userModel.deleteMany({})
    await recordModel.deleteMany({})
    for (let i = 0; i < 100; i++) { // escribe 100 dokumente furs testen
        const randomUser = new userModel({
            firstName: faker.name.firstName(), // escribe zufallige daten rein
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            passWord: faker.internet.password()
        })
        randomUser.save();
        const randomRecord = new recordModel({
            title: faker.hacker.phrase(),
            artist: faker.animal.insect(),
            year: faker.datatype.number(2021),
            //cover:faker.image.image(),
            price: faker.commerce.price()
            })
        randomRecord.save();
    }
}
















export default connectMongoose;