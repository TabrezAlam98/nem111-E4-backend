const mongoose=require("mongoose")
// const connection=mongoose.connect("mongodb://127.0.0.1:27017/todo_app")
const connection=mongoose.connect(`mongodb+srv://TabrezAlam98:talam955@cluster0.ox7b5cc.mongodb.net/crud_app?retryWrites=true&w=majority`)

const userSchema=mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const UserModel=mongoose.model("users",userSchema)
module.exports={connection,UserModel}