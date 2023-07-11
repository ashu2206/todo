const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/TodoDB')
.then(()=> console.log("Connect To Database"))
.catch((err)=> console.log("connection failed",err));