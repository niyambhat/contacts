const express = require('express')
const router = express.Router();

// @route  /api/auth
// @desc   Authenticatev user and get token 
// @access Public

router.get('/', (req, res)=>{
    res.send({"success":"API is working"})
})

module.exports = router;