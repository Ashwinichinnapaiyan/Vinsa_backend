const mongoose=require('mongoose')
const express=require('express');

const SignupTemplate=new mongoose.Schema(
    {
        SelectService:{
            type:String,
            required:true,
        },
        Name:{
            type:String,
            required:true,
        },
        Contact:{
            type:String,
            required:true,

        },
        Email:{
            type:String,
            required:true,

        },
        State:{
            type:String,
            required:true,

        },
        City:{
            type:String,
            required:true,

        },
        Pincode:{
            type:String,
            required:true,

        },
        VehicleModel:{
            type:String,
            required:true,

        },
        DateOfBooking:{
            type:Date,
            default:Date.now,

        },
        Message:{
            type:String,
            required:true,

        }

    }
)


//collection name=vinsacarcraft
module.exports=mongoose.model('Vinsacarcraft',SignupTemplate)


// database connction---> router-->app.js

//model---> router(app.post)--->server.js