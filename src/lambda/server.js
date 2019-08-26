'use strict';

const express = require('express');
const mongoose = require('mongoose');
const app = express();
var cors = require('cors');

const path = require('path');

const serverless = require('serverless-http');
const bodyParser = require('body-parser');


const router = express.Router();


const LocationModel = require('./models/LocationModel');

const PendingModel = require('./models/PendingModel');


{/*

    create: (req, res) => {
        let location = new LocationModel({locationName: req.body.location_name, locationAddress: req.body.location_address, verified: req.body.location_verified, coordinates: req.body.coordinates});

        location
            .save()
            .then(result => {
                res.json({success: true, result: result});
            })
            .catch(err => {
                res.json({success: false, result: err});
            })

    },

    update: (req, res) => {
        LocationModel.update({
            _id: req.body._id
        }, req.body).then(result => {
            if (!result) 
                res.json({success: false, result: "Location does not exist"});
            res.json(result);
        }).catch(err => {
            res.json({success: false, result: err});
        });
    },
    get_pending_verified: (req, res) => {
        PendingModel
        .find()
        .then(result => {
            if (!result) 
                res.json({success: false, result: "No results found"});
            
            res.json({success: true, result: result});
        })
        .catch(err => {
            res.json({success: false, result: err})
        })

    },

    pending_verified: (req, res) => {
        let pending = new PendingModel({locationName: req.body.locationName, locationAddress: req.body.locationAddress});

        pending
            .save()
            .then(result => {
                res.json({success: true, result: result});
            })
            .catch(err => {
                res.json({success: false, result: err});
            })

    },
    retrieve: (req, res) => {
        LocationModel
            .find()
            .then(result => {
                if (!result) 
                    res.json({success: false, result: "No results found"});
                
                res.json({success: true, result: result});
            })
            .catch(err => {
                res.json({success: false, result: err})
            })
    },
    

    retrieve_by_address: (req, res) => {
        LocationModel.find({
            "locationAddress": req.body.locationAddress
        }, function (err, obj) {

            if (obj.length < 1){
            res.json(
                {"locationName": req.body.locationName,
                "locationAddress": req.body.locationAddress,
                "verified": false,
                }
            );

            }

            else {
                return 
            }
        })
            .select({"locationName": 1, "locationAddress" : 1, "verified": 1})
            .then(query => {
                res.send(query[0]);
            })
            .catch(err => {
                res
                    .status(400)
                    .send("Update not possible");
            });
    },


    delete: (req, res) => {
        LocationModel
            .remove({_id: req.body._id})
            .then(result => {
                if (!result) 
                    res.json({success: false, result: "No locations were found with the id"});
                res.json({success: true, result: result});
            })
            .catch(err => {
                res.json({success: false, result: err});
            })
    }

*/}

//Controllers

//const LocationControl = require('./controllers/LocationControl');

//Routes

{/*
app.get('/api/location/retrieve', LocationControl.retrieve);
app.post('/api/location/submit', LocationControl.create);
app.post('/api/location/update', LocationControl.update);
app.post('/api/location/retrieve_by_address', LocationControl.retrieve_by_address);
app.delete('/api/location/delete', LocationControl.delete);
app.get('/api/location/get_pending_verified', LocationControl.get_pending_verified);
app.post('/api/location/pending_verified', LocationControl.pending_verified);

*/}



router.get('/api/location/retrieve', (req, res) => {
    LocationModel
    .find()
    .then(result => {
        if (!result) 
            res.json({success: false, result: "No results found"});
        
        res.json({success: true, result: result});
    })
    .catch(err => {
        res.json({success: false, result: err})
    })

});


router.post('/api/location/submit', (req, res) => {
    let location = new LocationModel({locationName: req.body.location_name, locationAddress: req.body.location_address, verified: req.body.location_verified, coordinates: req.body.coordinates});

        location
            .save()
            .then(result => {
                res.json({success: true, result: result});
            })
            .catch(err => {
                res.json({success: false, result: err});
            })
});

router.post('/api/location/update', (req, res) => {

    LocationModel.update({
        _id: req.body._id
    }, req.body).then(result => {
        if (!result) 
            res.json({success: false, result: "Location does not exist"});
        res.json(result);
    }).catch(err => {
        res.json({success: false, result: err});
    });
    
});


router.post('/api/location/retrieve_by_address', (req, res) => {

    LocationModel.find({
        "locationAddress": req.body.locationAddress
    }, function (err, obj) {

        if (obj.length < 1){
        res.json(
            {"locationName": req.body.locationName,
            "locationAddress": req.body.locationAddress,
            "verified": false,
            }
        );

        }

        else {
            return 
        }
    
})

});

router.delete('/api/location/delete', (req, res) => {
    LocationModel
    .remove({_id: req.body._id})
    .then(result => {
        if (!result) 
            res.json({success: false, result: "No locations were found with the id"});
        res.json({success: true, result: result});
    })
    .catch(err => {
        res.json({success: false, result: err});
    })
});




router.get('/api/location/get_pending_verified', (req, res) => {

    PendingModel
    .find()
    .then(result => {
        if (!result) 
            res.json({success: false, result: "No results found"});
        
        res.json({success: true, result: result});
    })
    .catch(err => {
        res.json({success: false, result: err})
    })

    
});


router.post('/api/location/pending_verified', (req, res) => {
    let pending = new PendingModel({locationName: req.body.locationName, locationAddress: req.body.locationAddress});

    pending
        .save()
        .then(result => {
            res.json({success: true, result: result});
        })
        .catch(err => {
            res.json({success: false, result: err});
        })
});




//DB

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
.then(

    () => console.log("Connected to database")
)
.catch(err => console.error(err));




//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
//app.use(express.json());


//app.use('/.netlify/functions/api', router);  // path must route to lambda




//Start server
module.exports = app;
module.exports.handler = serverless(app);

//app.listen(3000, () => console.log('Server has started on port 3000...'))