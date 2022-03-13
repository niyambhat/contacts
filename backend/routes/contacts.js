const express = require('express')
const router = express.Router();


// @route  GET /api/contacts
// @desc   Get all contacts 
// @access Private

router.get('/', (req, res)=>{
    res.json({"reminder":"Get all contacts"})
})

// @route  POST /api/contacts
// @desc   Add a new contact
// @access Private

router.post('/', (req, res)=>{
    res.json({"reminder":"Add a contact"})
})

// @route  PUT /api/contacts
// @desc   Update contact
// @access Private

router.put('/:id', (req, res)=>{
    res.json({"reminder":"Update a contact"})
})

// @route  DELETE /api/contacts
// @desc   delete a contact
// @access Private

router.delete('/:id', (req, res)=>{
    res.json({"reminder":"Delete a contact"})
})





module.exports = router;