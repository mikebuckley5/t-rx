//DEPENDENCIES
var express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser');

//CONTROLLERS
var ordersCtrl = require('./controllers/ordersCtrl.js');
var patientsCtrl = require('./controllers/patientsCtrl.js');
var prescribersCtrl = require('./controllers/prescribersCtrl.js');

//EXPRESS
var app = express();

//CONNECTION
var mongoUri = 'mongodb://localhost:27017/chidorx';
mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('Connected to MongoDB!!');
});

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./public'));

//Orders Endpoints
app.get('/api/orders', ordersCtrl.find);
app.post('/api/orders', ordersCtrl.save);

//Patients Endpoints
app.get('/api/patients', patientsCtrl.find);
app.post('/api/patients', patientsCtrl.save);

//Prescribers Endpoints
app.get('/api/prescribers', prescribersCtrl.find);
app.post('/api/prescribers', prescribersCtrl.save);

//LISTEN
app.listen(8555);