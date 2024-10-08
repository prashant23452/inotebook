const express= require('express');
const User=require('../models/User');
const router=express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');


// Rout : 1 create a user using : POST "/api/auth/createuser".No login required
const JWT_SECRET="prashantkhbvhg";
router.post('/createuser',[
    body('name', 'Enter a valid Name').isLength({ min :3 }),
    body('email','Enter a valid e-mail' ).isEmail(),
    body('password', 'password must have atleast 5 characters').isLength({ min :5 })
],async(req,res) =>{
    // If there are errors , return bad request and the errors
    let success=false;
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success,errors: errors.array() });
    }
    // Check whether the user with same email exist already
    try{
    let user= await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({success,error: "Sorry a user with this email already exists"})
    }
    const salt= await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    // Create a new user
    user= await User.create({
        name: req.body.name,
        password: secPass,
        email:req.body.email
      })
      const data= {
    user:{
        id: user.id
    }
      }
    const authToken=jwt.sign(data, JWT_SECRET);
    success=true;
    res.json({success,authToken});
    }
    catch(error){
        console.error(error.message);
        res.status(500).send(success, "Internal Server errors occuurred");
    }

})
//Rout : 2 Authenticate a user using : POST "/api/auth/login".No login required

router.post('/login',[
    body('email','Enter a valid e-mail' ).isEmail(),
    body('password', 'password cannot be blank').exists(),
],async(req,res) =>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    const {email, password}= req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            success=false;
            return res.status(400).json({success,error : "Please try to login with correct credentials"});
        }

        const passwordCompare =await  bcrypt.compare(password, user.password);
        if(!passwordCompare){
            success=false;
            return res.status(400).json({success,error : "Please try to login with correct credentials"});
        }
        const payload = {
            user: {
                id: user.id
            }
        }
        const authToken=jwt.sign(payload, JWT_SECRET);
    success=true;
    res.json({success,authToken});
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server errors occuurred");
    }
    

})

//Rout : 3 Get logged in user details using : POST "/api/auth/getuser".No login required
router.post('/getuser', fetchuser ,async(req,res) =>{
try {

    userId= req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user);
} catch (error) {
    onsole.error(error.message);
        res.status(500).send("Internal Server errors occuurred");
    }
})
module.exports = router;