require('dotenv').config();

const path = require("path");
const cookieParser = require("cookie-parser");
const express = require('express');
const app = express();

const {notFoundHandler, errorHandler} = require('./middlewares/common/errorHandler')

const loginRouter = require("./routers/loginRouter");
const adminRouter = require('./routers/adminRouter');
const employeeRouter = require('./routers/employeeRouter');
const companyRouter = require('./routers/companyRouter');

app.use('/',loginRouter);
app.use('/admin',adminRouter);
app.use('/employee',employeeRouter);
app.use('/company',companyRouter);

//not found handler
app.use(notFoundHandler);

// default error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => console.log(`Example app is listening on port ${process.env.PORT}`));