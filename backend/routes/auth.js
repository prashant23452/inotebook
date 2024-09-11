const express= require('express');
const User=require('../models/User');
const router=express.Router();
const { body, validationResult } = require('express-validator');


//create a user using : POST "/api/auth/createuser".No login required

router.post('/createuser',[
    body('name', 'Enter a valid Name').isLength({ min :3 }),
    body('email','Enter a valid e-mail' ).isEmail(),
    body('password', 'password must have atleast 5 characters').isLength({ min :5 })
],async(req,res) =>{
    // If there are errors , return bad request and the errors
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    // Check whether the user with same email exist already
    try{
    let user= await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error: "Sorry a user with this email already exists"})
    }
    user= await User.create({
        name: req.body.name,
        password: req.body.password,
        email:req.body.email
      })
    res.json(user);
    }
    catch{
        console.error(error.message);
        res.status(500).send("Some errors occuurred");
    }

})


module.exports = router;