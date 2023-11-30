const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://codemaster:suraj123@cluster0.uhlkxjg.mongodb.net/crudop1?retryWrites=true&w=majority")
.then(()=>console.log("Connected"));