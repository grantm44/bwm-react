const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');


router.get('', function(req,res) {
    Rental.find({}, function(err, foundRentals){
        res.json(foundRentals);
    })
})

router.get('/:id', function(req, res){
    Rental.findById(req.params.id, function(err, rental){
        if(err){
            res.status(422).send({erros: [{title: "Rental error!", detail: "Could not find rental"}]})
        }
        res.json(rental);
    })
})


module.exports = router;