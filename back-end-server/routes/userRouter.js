const express =require('express');
const RegisterModel = require('../model/userRegModel');

const route = express.Router();

route.get('/get',async(req,res)=>{

    try{
        
        const details = await RegisterModel.find({});

        res.json(details);
        
    }
    catch(err){
        res.status(500).json({err:err.message});
    }
})
route.post('/enroll',async(req,res)=>{

    try{
        console.log(req.body);
        let userRegisterDetails = new RegisterModel(req.body);

        result = userRegisterDetails.save();
        res.json({"msg":"Register successfull"})
        
    }
    catch(err){
        res.status(400).json({errMsg:err.message});

    }
})
module.exports =  route;