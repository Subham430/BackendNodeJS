const router = require('express').Router();
const { authenticate } = require('../middlewares/auth');

const loginRouter = require("./login");
const adminRouter = require('./admin');
const employeeRouter = require('./employee');
const companyRouter = require('./company');

router.use('/login', loginRouter);
router.use('/admin',authenticate, adminRouter);
router.use('/employee', authenticate, employeeRouter);
router.use('/company',authenticate, companyRouter);

module.exports = router;