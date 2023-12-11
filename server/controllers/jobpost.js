const jobmodel = require('../models/jobpost');
const User = require('../models/user');
const fs = require("fs");
const bcrypt = require("bcryptjs");

//add new job 
exports.jobpost = async function (req, res) {
  console.log("hello employee , post good  job for sekeer")
  const {
    title,
    category,
    jobtype,
    salary,
    exprience,
    JavaDev,
    PythonDev,
    FullStackDev,
    UIUXDesginer,
    AndroidDev,
    jobsummary,
    jobrequirement,
    loginuserinfo,
  } = req.body;
  var date = new Date();
  var deadlineDate = new Date(date.setDate(date.getDate() + 10));
  console.log(deadlineDate)
  date = new Date()
  console.log(date);
  try {
    const obj = new jobmodel({
      title: title,
      companyname: loginuserinfo,
      category: category,
      jobtype: jobtype,
      salary: salary,
      exprience: exprience,
      jobfunction: {
        JavaDev: JavaDev,
        PythonDev: PythonDev,
        FullStackDev: FullStackDev,
        UIUXDesginer: UIUXDesginer,
        AndroidDev: AndroidDev,
      },
      jobsummary: jobsummary,
      jobrequirement: jobrequirement,
      postedDate: date,
      deadlineDate: deadlineDate

    });
    await obj.save();
    console.log("saved!")
    res.status(201).json(obj);
  } catch (err) {
    console.log(err);
  }

}

//for display list of all job as card
exports.jobdisplay = async function (req, res) {

  const objectdata = await jobmodel.find({});
  console.log(objectdata)
  res.status(201).json(objectdata);

}

//for displat single job details on whole page
exports.details = async function (req, res) {
  const id = req.body.id;
  console.log(id);
  const obj = await jobmodel.find({ _id: id });
  res.status(201).json(obj);
  console.log(obj);
}