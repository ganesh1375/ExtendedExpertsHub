const mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const routes = require('./routes/userRouter');


const url = "mongodb+srv://Nag-test:Test@mongodb.ga6r7.mongodb.net/Employee?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true} //
    ).then(response =>{
        console.log('Mongo connected...   --',response.now().getHours()+":"+response.now().getMinutes()+":"+response.now().getSeconds());
    }).catch(err =>{
        console.log(err.message);

    });

const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use('/api',routes);


var server = app.listen(5500,()=>{

    var port = server.address().port;
    console.log(`"server is running ${port}"`);
})
