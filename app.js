require('dotenv').config();

// const cookieParser = require("cookie-parser");
const path = require("path");
const body = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./src/config/swagger');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const {notFoundHandler, errorHandler} = require('./middlewares/common/errorHandler')

const router = require("./routes");
app.use('/swastik', router);

//not found handler
app.use(notFoundHandler);

// default error handler
app.use(errorHandler);
app.use(process.env.SWAGGER_DOC_URL, swaggerUi.serve, swaggerUi.setup(swaggerSpecs))

app.listen(process.env.PORT, () => console.log(`Example app is listening on port ${process.env.PORT}`));