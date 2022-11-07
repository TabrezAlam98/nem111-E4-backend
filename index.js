const { application } = require("express")
// require("dotenv").config()
const express=require("express")
// const PORT=precess.env.PORT || 8500
const {connection,UserModel}=require("./db")
// const {UserModel}=require("./models/User.model")

const app=express()
app.use(express.json());



app.post("/signup", async(req,res)=>{
    const {email,password}=req.body;
    const new_user=await UserModel({
        email,password
    })
    await new_user.save();
    res.send("signup successfully")
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const new_users=await UserModel.find({email,password})
    if(new_users){
        
        res.send({"message":"Login successfully","token":Math.random()})

    }else{
        res.send("Login Failled")
    }
})






app.listen(8080,async()=>{
    try{
        await connection
        console.log("connected to DB successfully")
    }catch(err){
         console.log("error")
         console.log(err)
    }
    console.log("listening on port 8080")
})