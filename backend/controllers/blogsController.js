const {blogsModel} = require("../models/blogs");
const {categoryModel} = require("../models/categories");
const moment = require("moment-timezone");

exports.createBlog = async (req,res)=>{
    let title = req.body.title;
    let content = req.body.content;
    let slug = stringToSlug(title);
    let created_by = req.body.admin;
    let category = req.body.category;
    let category_id='';
    let validation1 = await categoryModel.findOne({name:category});
    if(validation1.length==0){
        res.json({message:"Category Name not exist "+category});
    }else{
        category_id= validation1._id.toString(); ;
    }
    let date_time = moment().tz('Asia/Kolkata').format("DD-MM-YYYY HH:mm:ss");
    console.log(category_id);
    
    try {
        let validation2 = await blogsModel.find({slug:slug});
        // console.log(validation2);        
        if(validation2.length>0){
            res.json({
                message:"Blog Already Created", 
                page_id:validation2[0]._id.toString()
            });
        }else{
            try {
                let blogData = blogsModel({
                    title:title,
                    content:content,
                    slug:slug,
                    created_by:created_by,
                    category_id:category_id,
                    status:"Active",
                    date_time:date_time,
                });
        
                await blogData.save();
        
                res.status(201).json({
                    message:"Page Created Successfully",
                    page_id: blogData._id
                });
            } catch (error) {
                console.log(error.message);
                res.status(500).json({
                    mesage:error.message
                });
            }
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            mesage:error.message
        });
    }

};

exports.page = async (req,res)=>{
    let slug = req.params.slug;
    try {
        let validation1 = await blogsModel.find({slug:slug, status:"Active"});
        if(validation1.length==0){
            res.json({
                message:"No Data"
            });
        }else{
            res.status(200).json(validation1[0]);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            mesage:error.message
        });
    }

}

exports.blog_list = async (req,res)=>{

    try {
        let blog_List = await blogsModel.find();
        res.json(blog_List);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            mesage:error.message
        });
    }
}


function stringToSlug(str) {
    return str
        .toLowerCase()                 
        .trim()                         
        .replace(/[^a-z0-9 -]/g, '')    
        .replace(/\s+/g, '-')         
        .replace(/-+/g, '-');         
}