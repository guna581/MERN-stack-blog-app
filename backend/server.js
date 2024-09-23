const express = require("express");
const app = express();
const route = require('./routes/routes');
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use('/', route)

const port = 8000;

app.listen(port, ()=>{
    console.log("App is running on "+8000);
});