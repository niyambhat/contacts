const { decodeBase64 } = require('bcryptjs');
const { Router } = require('express');
const express = require('express');
const { route } = require('./auth');
const router = express.Router();
const User = require('../models/User')
const {check, validationResult} = require('express-validator')

// @route  GET /api/users
// @desc   Get logged in user 
// @access Private
router.get('/', (req, res)=>{
    res.send({"success":"API is working"})
})

// @route  POST /api/users
// @desc   Submits login details
// @access Private

router.post('/', 
[
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('email', 'Please include an email').isEmail(),
    check('password', 'Please include your password').isLength({min:6})  
],
(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    res.send('passed')
})

module.exports = router;