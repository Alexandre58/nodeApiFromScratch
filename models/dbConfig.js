//connection a la base de donnée
const mongoose = require('mongoose');

mongoose.connect(
    "mongoose:mongodb+srv://ALEXANDRE:cerche@cluster0.gufrz.mongodb.net/test?authSource=admin&replicaSet=atlas-awgolm-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
    {useNewUrlParser: true, useUnifiedTopology: true },
    (err)=> {
        if(!err) console.log('mongoose connect ');
        else console.log('Connection error !!' + err);
    }
)