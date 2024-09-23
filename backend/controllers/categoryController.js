const mongoose = require("mongoose");
const {categoryModel} =  require("../models/categories");

exports.storeCategory = async (req,res)=>{
    let name = req.body.name;
    let slug = stringToSlug(name);
    let admin = req.body.admin;
    try {        
        let validation = await categoryModel.find({name});
        if(validation.length==0){
            let categoryData = new categoryModel({name:name, slug:slug, created_by:admin});      
            await categoryData.save();
            res.status(201).json({message:"Category Created Successfully"});
        }else{
            res.status(200).json({message:"Category Alreay Exist"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}; 


function stringToSlug(str) {
    return str
        .toLowerCase()                 
        .trim()                         
        .replace(/[^a-z0-9 -]/g, '')    
        .replace(/\s+/g, '-')         
        .replace(/-+/g, '-');         
}