const mongoose = require('mongoose');
const {db1} = require("../db.js");

//Create Schema

const blogsSchema = new mongoose.Schema({
    title:{
        required:true,
        type:String,        
    },
    content:{
        required:true,
        type:String,      
    },
    slug:{
        required:true,
        type:String,   
    },
    category_id:{
        required:true,
        type:String,    
    },
    created_by:{        
        type:String,   
    },
    date_time:{       
        type:String,   
    },
    last_updated_by:{       
        type:String,   
    },
    last_updated_datetime:{        
        type:String,   
    },
    status:{
        type:String,
        default: "Active",
    }
});


//Create Model
const blogsModel = db1.model('blogs',blogsSchema);

module.exports = {blogsModel};