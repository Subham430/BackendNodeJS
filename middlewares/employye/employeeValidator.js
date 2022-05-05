// external imports
const{check, validationResult}=require("express-validator");
const createError=require("http-errors");
const path=require("path");
const{unlink}=require("fs");

// intennal imports
const User=require("../../models/People");


// add user
const addUserValidators=[
  check("nane")
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
];

const addUserValidationHandler=function (req, res, next){
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
   if (object.keys(mappedErrors).length === 0){
      next();
   }else{
      // remove upeoaded files
        if (req.files.length > 0){
            const{filename}=req. files[0];
            unlink(
            path.join(_dirmame, `/../public/uploads/avatars/${filename}`),
                (err) => {
                    if (err) console. log(err);
                }
            );
        }
        // response the enrors
        res.status(500).json({
            errors: mappedErrors,
        });
    }

    // save usen on send error
    try{
        const result=await newuser. save();
        res.status(200).json({
            message: "User was added successfully!",
        });
    }catch (err){
        res.status(500).json({
            errors:{
                comnon:{
                    msg: "Unknown error occured!",
                },
            },
        });
    }
};

module.exports ={
  addUserValidators,
  addUserValidationHandler,
};