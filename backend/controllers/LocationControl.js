const LocationModel = require('../models/LocationModel');

module.exports = {
    create: (req, res) => {
        let location =  new LocationModel({
            locationName: req.body.location_name,
            locationAddress: req.body.location_address,
            verified: req.body.location_verified
        });

location.save()


.then(result => {
    res.json({success:true, result: result});
})
.catch(err => {
    res.json({success:false, result: err});
})

    },


    update: (req,res) => {
        LocationModel.update({_id: req.body._id}, req.body)
        .then(result => {
            if (!result) res.json({success: false, result: "Location does not exist"});
            res.json(result);
                    })
            .catch(err => {
                res.json({success:false, result: err});
            });
    },


    retrieve: (req, res) => {
        LocationModel.find()
        .then(result => {
            if (!result) res.json({success:false, result: "No results found"});

            res.json({success:true, result:result });
        })
        .catch(err => { res.json({success: false, result: err}) })
    },

    delete: (req, res) => {
        LocationModel.remove({_id: req.body._id})
        .then(result => {
            if (!result) res.json({success:false, result: "No locations were found with the id"});
            res.json({success:true, result:result});
        })
        .catch(err => {
            res.json({success:false, result:err});
        })
    }
}