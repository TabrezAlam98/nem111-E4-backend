const express=require("express");



const express=require("express")
const {connection}=require("./db")
const { TodoModel} = require("./models/Todo.model")
const app=express();

// const PORT=process.env.PORT || 8080
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home page")
})
app.get("/todo", async (req, res) => {
    const results = await TodoModel.find()
    res.send(results)
})
app.post("/addTodo", async (req, res) => {
    const data = req.body;
    const student = new TodoModel(data)
    await student.save()
    res.send(student)
})

app.patch("/edit/:id",async(req,res)=>{
    const id=req.params.id;
    const update=await TodoModel.findOne({_id:id})
    const newData=await TodoModel.findByIdAndUpdate(id,req.body)
    return res.send(newData)
})
app.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;
    const update=await TodoModel.findOne({_id:id})
    const newData=await TodoModel.findByIdAndDelete(id,req.body)
     res.send("deleted")
})

app.listen(8080,()=>{
    console.log("listening on port 8080")
})