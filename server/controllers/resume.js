const resumeeducation = require('../models/education')
const resumeexperience = require('../models/experience')
const resumepersonaldetail = require('../models/personaldetail')
const resumeskills = require('../models/skills')

exports.personaldetail = async (req, res) => {
    console.log("for personal data")
    try {
        const { Firstname, Lastname, Email, City, Country, Pincode, Mobile } = req.body;
        // console.log(req.body);
        // console.log(Email)
        //saving a new user account to database
        const detail = new resumepersonaldetail({
            Firstname: Firstname,
            Lastname: Lastname,
            Email: Email,
            City: City,
            Country: Country,
            Pincode: Pincode,
            Mobile: Mobile
        });
        console.log(detail);
        // console.log(detail._id)
        let msg = await detail.save();
        console.log(msg)

        // return res.status(200).json({
        //     message: "personaldetail register"
        // });

        return res.status(200).json(detail)
    }
    catch (err) {
        console.log(err);
    }
}

exports.education = async function (req, res) {
    try {

        const { Email, SchoolName, CollageName, Qualification, YearOfGraduation } = req.body;
        // console.log(Email)
        //saving a new user account to database
        const detail = new resumeeducation({
            Email: Email,
            SchoolName: SchoolName,
            CollageName: CollageName,
            Qualification: Qualification,
            YearOfGraduation: YearOfGraduation,

        })
        // console.log(detail._id)
        let msg = await detail.save();
        console.log(msg)
        return res.status(200).json({
            message: "personaldetail register"
        });
    }
    catch (err) {
        console.log(err);
    }
}
exports.experience = async function (req, res) {
    try {

        const { Email, jobtype, workedat, jobcity, StartDate, EndDate } = req.body;
        const experiencedetails = new resumeexperience({
            Email: Email,
            jobType: jobtype,
            workedAt: workedat,
            jobcity: jobcity,
            StartDate: StartDate,
            EndDate: EndDate
        })
        await experiencedetails.save();
        return res.status(200).json({
            message: "experience register"
        });

    }
    catch (err) {
        console.log(err);
    }
}

exports.skill = async function (req, res) {
    try {
        const { Email, Java, Python, React, ASPNET, dbms } = req.body;
        const skilldetail = new resumeskills({
            Email: Email,
            Skills: {
                skill1: Java,
                skill2: Python,
                skill3: React,
                skill4: ASPNET,
                skill5: dbms
            }
        })
        await skilldetail.save();
        return res.status(200).json({
            message: "skills register"
        });

    }
    catch (err) {
        console.log(err);
    }
}

exports.resume = async function (req, res) {
    console.log("Resume Display")
    const { Email } = req.body
    // console.log(Email)
    const education = await resumeeducation.find({
        Email: Email
    });
    console.log(education)
    const personaldetail = await resumepersonaldetail.find({
        Email: Email
    });
    console.log(personaldetail)
    const experience = await resumeexperience.find({
        Email: Email
    });
    console.log(experience)
    const skill = await resumeskills.find({
        Email: Email
    });
    console.log(skill)

    const obj = {
        personaldetail: personaldetail,
        education: education,
        experience: experience,
        skill: skill
    }
    console.log(obj);
    res.status(200).json(obj)
}