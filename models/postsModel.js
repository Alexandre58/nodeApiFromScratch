const mongoose = require('mongoose');

const PostsModel = mongoose.model(
    //base de donnée crée mongoDb
     "nodeapi",
     { 
         author : {type : String, required: true},
         message: {type: String, required: true},
         date:{type: Date, default: Date.now}
     },
     //creation prealable de la table dans mongoDb/nodeapi
     "posts"

);

module.exports = {PostsModel};