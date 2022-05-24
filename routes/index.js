const { authenticate } = require('../middlewares/auth');

const loginRouter = require("./login");
const adminRouter = require('./admin');
const employeeRouter = require('./employee');
const companyRouter = require('./company');

app.use('/login', loginRouter);
app.use('/admin',authenticate, adminRouter);
app.use('/employee', authenticate, employeeRouter);
app.use('/company',authenticate, companyRouter);