const mongoose =  require("mongoose");
const db1 = mongoose.createConnection('mongodb://localhost:27017/blogs');

db1.on("error", (err)=>{
    console.log("DB connection error" + err);    
});

db1.on("open", ()=>{
    console.log("DB Connected Successfully");
});

module.exports = {db1};