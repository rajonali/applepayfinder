const express = require('express')
const mongoose = require('mongoose')
const app = express();
var cors = require('cors');


//DB

mongoose.connect('mongodb://127.0.0.1:27017/location-manager', {useNewUrlParser: true})
.then(

    () => console.log("Connected to database")
)

.catch(err => console.error(err));




//Middleware
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//Controllers

const LocationControl = require('./controllers/LocationControl');

//Routes

app.post('/api/location/submit', LocationControl.create);
app.post('/api/location/update', LocationControl.update);
app.get('/api/location/retrieve', LocationControl.retrieve);
app.post('/api/location/retrieve_by_address', LocationControl.retrieve_by_address);
app.delete('/api/location/delete', LocationControl.delete);

app.post('/api/location/pending_verified', LocationControl.pending_verified);





//Start server

app.listen(3000, () => console.log('Server has started on port 3000...'))



