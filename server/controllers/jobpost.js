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


exports.jobupdate = async function (req, res) {
  const id = req.body.id;
  const user = req.body.user;
  // console.log("hello world")
  console.log(id);
  console.log(user);

  try {
    var userd = await User.find({ _id: user._id })

    console.log(userd);
    userd = userd[0]
    const userdone = await userd.applyJob(id);
    var compdone = await jobmodel.find({ _id: id });
    compdone = compdone[0];
    console.log("l")
    console.log(compdone)
    var companydone = await compdone.companyjob(user._id)

    if (userdone && companydone)
      res.status(200).send("sucefully added job in user and company");
  }
  catch (e) { console.log(e) }
  //res.status(400).send("error updating company and user")
}


exports.admin = async function (req, res) {
  var emop = req.body.emop;
  emop = JSON.parse(emop);
  console.log(emop)

  const objectdata = await jobmodel.find({ companyname: emop.companyname })
  res.status(201).json(objectdata);



}
exports.companycheck = async function (req, res) {
  const company = await jobmodel.count({ companyname: req.body.companyname })

  if (!company) {
    return res.status(201).json({ error: "Oops! You need to Post Job First" })
  }
  return res.status(201).json({ message: "Posted Job", company: company })
}


exports.adminuser = async function (req, res) {
  var jobid = req.body.jobid;
  console.log("j")
  console.log(jobid)
  const objectdata = await jobmodel.find({ _id: jobid })
  const userlist = objectdata[0].Applieduser
  var retobj = []
  for (j in userlist) {
    console.log(j)
    var query = await User.find({ _id: userlist[j].userId });
    // console.log(query)
    console.log(userlist[j].userId)
    console.log(query[0].AppliedJobs)
    var index = query[0].AppliedJobs.findIndex(item => item.jobId === jobid);
    //  const [key,value]= Object.entries(query[0].AppliedJobs).find(([key, value]) => value === jobid);
    var temp = { status: query[0].AppliedJobs[index].status };
    console.log(temp);
    query = { ...query, ...temp }
    console.log(query);
    retobj = retobj.concat(query);
  }
  console.log(retobj)
  res.status(201).json(retobj);

}


exports.deleteuser = async function (req, res) {
  const userId = req.body.userId;
  const jobid = req.body.jobid;
  var objdata = await User.find({ _id: userId })
  // console.log(objdata)
  console.log("upadtes")
  objdata = objdata[0]
  var index = objdata.AppliedJobs.findIndex(item => item.jobId === jobid);
  objdata.AppliedJobs[index].status = "Rejected";

  var userjob = await jobmodel.find({ _id: jobid })
  userjob = userjob[0];
  var indexo = userjob.Applieduser.findIndex(item => item.userId === userId);
  console.log("hfffffffffffffffffffffffiqqwerrrrrrrrrrrrrrrrrrrrrrrrrrr")
  console.log(userjob.Applieduser[indexo])

  userjob.Applieduser.splice(indexo, 1);
  // console.log(userjob)
  // db.inventory.deleteOne( { status: "D" } )
  // var userjob=await jobmodel.deleteOne( {_id:jobid,} )
  await userjob.save();
  await objdata.save();
  res.status(201).json("sucessfully deleted");

}


exports.updateaccept = async function (req, res) {
  const userId = req.body.userId;
  const jobid = req.body.jobid;
  const accepted = req.body.accepted

  console.log(accepted)
  var objdata = await User.find({ _id: userId })
  console.log("upadtes")
  objdata = objdata[0]
  var index = objdata.AppliedJobs.findIndex(item => item.jobId === jobid);

  objdata.AppliedJobs[index].status = accepted;

  await objdata.save();

  res.status(201).json(objdata);


}


exports.updatereject = async function (req, res) {
  const userId = req.body.userId;
  const jobid = req.body.jobid;
  const rejected = req.body.rejected;


  var objdata = await User.find({ _id: userId })
  console.log(objdata)
  console.log("upadtes")
  objdata = objdata[0]
  var index = objdata.AppliedJobs.findIndex(item => item.jobId === jobid);

  objdata.AppliedJobs[index].status = rejected;

  await objdata.save();

  res.status(201).json(objdata);


}

exports.jobrecommend = async function (req, res,) {
  var jobs = req.body.responseData
  var recommendjob = []
  // console.log(jobs[1][1])
  for (h in jobs) {
    var query = await jobmodel.find({ _id: jobs[h][1] });
    console.log("query");
    console.log(query);
    if (query[0] != null)
      recommendjob = recommendjob.concat(query[0]);
  }


  console.log("recommendjob")
  console.log(recommendjob)
  res.status(201).json(recommendjob);
}


exports.appliedjob = async function (req, res) {
  id = req.body.userId;
  var appliedjob = []
  // console.log(jobs[1][1])
  var query = await User.find({ _id: id });
  query = query[0].AppliedJobs
  for (h in query) {
    var test = await jobmodel.find({ _id: query[h].jobId });
    var tempstatus = { status: query[h].status };
    if (test[0] != null) {
      const temp = { ...test, ...tempstatus }

      appliedjob = appliedjob.concat(temp);
    }
  }


  console.log("applied job")
  console.log(appliedjob)
  res.status(201).json(appliedjob);

}