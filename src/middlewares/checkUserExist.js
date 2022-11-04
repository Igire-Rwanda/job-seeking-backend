import UserModel from "../models/userModel";
import {hashPassword, isPasswordMatching} from "../utils/hashPassword";
import { Response } from "../utils/response";
import httpStatus from "http-status";

export const checkUser = async ( req,res,next) => {
    let {email, password} = req.body;
  const user = await UserModel.findOne({email:email});
  if(!user){
        req.body.password = hashPassword (password)
        return next()
  }
  return Response.errorMessage(res, "user is already exist", httpStatus.CONFLICT)
};

export const loginUser = async (req, res) => {
    let {email, password} = req.body;
    const user = await UserModel.findOne ({email});
    if (!user)
    {
        return Response.errorMessage(res, "email is not exist", httpStatus.NOT_FOUND)
    }
    if (isPasswordMatching(password,user.password))
    {
        user.password =null;
    return Response.successMessage(res,"Successfully logged in",user.httpStatus.OK)
};
return Response.errorMessage(res,"Invalid password",user.httpStatus.BAD_REQUEST)
};