const mongoose = require('mongoose');
const {db1} = require("../db.js");

//Create Schema
const categoriesSchema= new mongoose.Schema({
    name:{
        required:true,
        type:String,
    },
    slug:{
        required:true,
        type:String,
    },
    created_by:{
        type:String,
    }

}, {timestamps:true});

//Create Model
const categoryModel = db1.model('categories', categoriesSchema);

module.exports = {categoryModel};
