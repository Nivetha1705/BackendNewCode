const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    console.log("HII!");
    //res.status(500).send("Error occured");
    //res.status(200).send({error:"Error message"});
    //res.json({express:"learning express"})
    //res.send("Hello world");
    //res.render("index",{textk: "world"});
    res.send("Hello World");
});
// app.get("/user",(req,res)=>{
//     res.send("user information");
// })
// app.get("/user/newuser",(req,res)=>{
//     res.send("new user added");
// })
// app.get("/user/deleteuser",(req,res)=>{
//     res.send("user deleted");
// })

const userRoute=require('./routes/user');
app.use('/user',userRoute);

app.listen(3000);