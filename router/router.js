const express=require('express')
// routerlevle middleware
const router=express.Router();

const SignupTemplateCopy=require('../Modle/SignupModle');
const { Error } = require('mongoose');

router.post("/signup",(request,response)=>
{

     const sam=SignupTemplateCopy({
      SelectService:request.body.SelectService,
      Name: request.body.Name,
      Contact:request.body.Contact,
      Email: request.body.Email,
      State: request.body.State,
      City:request.body.City,
      Pincode:request.body.Pincode,
      VehicleModel:request.body.VehicleModel,
      DateOfBooking:request.body.DateOfBooking,
      Message:request.body.Message
     })
     sam.save().then(data=>
     {
        response.json(data);
        console.log('Data Added successfully');
     }).catch(error=>
     {
        response.json(Error)
     })
     
});


module.exports = router;