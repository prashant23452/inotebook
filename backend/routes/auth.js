const express= require('express');
const User=require('../models/User');
const router=express.Router();
const { body, validationResult } = require('express-validator');


//create a user using : POST "/api/auth". Doesn,t require Auth

router.post('/',[
    body('name', 'Enter a valid Name').isLength({ min :3 }),
    body('email','Enter a valid e-mail' ).isEmail(),
    body('password', 'password must have atleast 5 characters').isLength({ min :5 })
],(req,res) =>{
    
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email:req.body.email
      }).then(user => res.json(user))
      .catch(err => {console.log(err)
    res.json({error: 'Please entera unique value for email', message: err.message})})

    //res.send(req.body);

})


module.exports = router;