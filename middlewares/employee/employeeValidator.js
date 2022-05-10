// external imports
const{check, validationResult}=require("express-validator");
const createError=require("http-errors");

// intennal imports
const User=require("../../models/User");

// add user
const addUserValidators=[
    check("user_name")
        .isLength({ min:1})
        .withMessage("Name is required")
        .isAlpha("en-US",{ignore: " -" })
        .withMessage("Name must not contain anything other than alphabet")
        .trim(),
    check("company_name")
        .isLength({ min:1})
        .withMessage("Name is required")
        .isAlpha("en-US",{ignore: " -" })
        .withMessage("Name must not contain anything other than alphabet")
        .trim(),
    check("email")
        .isEmail()
        .withMessage("Invalid email address")
        .trim()
        .custom(async (value) => {
            try{
                const user=await User.findone({ email: value });
                if (user){
                    throw createError("Email already is user!");
                }
            }catch (err){
                throw createError(err.nessage);
            }         
        }),
    check("password")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/, "i")
        .withMessage("Password must contains minimum 8 and maximum 16 characters, include one lowercase character, one uppercase character, a number, and a special character."),
    
];

const addUserValidationHandler=function (req, res, next){
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    console.log(object.keys(mappedErrors) );
   if (object.keys(mappedErrors).length === 0){
    console.log("pass");
      next();
   }else{
    console.log("addUserValidationHandler");
        // response the enrors
        res.status(500).json({
            errors: mappedErrors,
        });
    }
};

module.exports ={
  addUserValidators,
  addUserValidationHandler,
};