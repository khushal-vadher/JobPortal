const userModel = require('../models/user.js');
const bcrypt = require("bcryptjs");


exports.user = async function (req, res) {
  const {
    name,
    email,
    number,
    password,
    confpassword,
    workstatus,
  } = req.body;
  try {
    const userexit = await userModel.findOne({
      email: email
    });
    
    if (userexit) {
      return res.status(422).json({
        error: "Email ID already exists!! Try other one"
      });
    } else {
      console.log("if user not exits then create user");
      const object = new userModel({
        name,
        email,
        password,
        workstatus,
      });
      
      const x = await object.save();
      
      return res.status(200).json({
        message: "register sucessfully!!"
      });


    }
  } catch (err) {
    console.log(err);
  }

}
exports.auth = async function (req, res) {
  console.log("logged in")
  const {
    email,
    password,
  } = req.body;
  try {
    const userlogin = await userModel.findOne({
      email: email
    });

    if (!userlogin) {
      return res.status(400).json({
        error: "invailad crenteidatisl"
      });
    } else {
      // console.log(userlogin.password);
      // console.log(password);
      const ismatch = await bcrypt.compare(password, userlogin.password);
      // console.log(ismatch);
      if (!ismatch) {
        return res.status(400).json({
          error: "invaild credientails"
        });
      } else {
        
        token = await userlogin.generateAuthToken();
        const obj = {
          message: "user sucesfully",
          token: token,
          loginuser: userlogin,
        };

        return res.status(201).json(obj);

      }
    }

  } catch (err) {
    console.log(err);
  }

}