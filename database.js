//1
import {Low,JSONFile} from 'lowdb';
//2
const adapter= new JSONFile('database.json');
const db=new Low(adapter);

//3
await db.read();
//4
db.data=db.data ||={records:[
    {
        title: 'Egal',
        artist:'DJ Egal',
        year:'2015',
        cover:'',
        price:5.5,
    },
]};

await db.write();

export default db;
