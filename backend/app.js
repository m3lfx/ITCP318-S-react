const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')




app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit: "50mb", extended: true }));
app.use(cors());
app.use(cookieParser());




module.exports = app