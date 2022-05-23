require('dotenv').config();

// const cookieParser = require("cookie-parser");
const path = require("path");
const body = require('body-parser');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const {notFoundHandler, errorHandler} = require('./middlewares/common/errorHandler')

const router = require("./routers");
app.use('/swastik', router);

//not found handler
app.use(notFoundHandler);

// default error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => console.log(`Example app is listening on port ${process.env.PORT}`));