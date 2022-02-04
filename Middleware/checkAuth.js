const User= require('../Models/UserModel')
const ErrorHandler = require('../Utlis/ErrorHandler');
const asyncError =require('./asyncError');
const jwt = require('jsonwebtoken');
// const { getCookie } = require('../../front-end/src/Redux/Cookie');
//check user is authenticated or not
exports.isAuthenticatedUser = asyncError(async(req,res,next)=>{
    //import token from cookie
    // const getCookie = (key) => {
    //     let name = key + "=";
    //     let ca = document.cookie.split(';');
    //     for (let i = 0; i < ca.length; i++) {
    //         let c = ca[i];
    //         while (c.charAt(0) === ' ') {
    //             c = c.substring(1);
    //         }
    //         if (c.indexOf(name) === 0) {
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return "";
    // }
    // getCookie('token')

    const {token}=req.cookies;
    
    // console.log(req.cookies);
    if (!token){
        return next(new ErrorHandler('Login first',401));
    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    req.user=await User.findById(decoded.id)
    // console.log(req.user);
    next()
});

//handling user role change
exports.authorizedRule =(...roles)=>{
    return(req,res,next)=>{
       if(!(roles.includes(req.user.role))) {
          return next( new ErrorHandler(`Role (${req.user.role}) is not allowed `,403))
       }
       next()
    }
}