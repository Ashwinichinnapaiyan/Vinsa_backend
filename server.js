 const express=require('express');
 const app=express();
 const mongoose=require('mongoose');
 const cors=require('cors');  //supporting middleware

const routerurl=require('./router/router')
 app.use(express.json());
 app.use(cors());

app.use("/app",routerurl);
if(mongoose.connect('mongodb+srv://Ashwini:Ashvni09@cluster0.96ohe.mongodb.net/My_Vinsa?retryWrites=true&w=majority&appName=Cluster0'))
{
    console.log('Database is Connected');
}

 app.listen(4000,()=>
{
    console.log('server is running on the port 4000')
});