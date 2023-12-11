const router=require('express').Router();
const resumeController=require('../controllers/resume.js')
console.log("build resume")
router.post("/education",resumeController.education);
router.post("/experience",resumeController.experience);
router.post("/personaldetail",resumeController.personaldetail)
router.post("/skill",resumeController.skill)
router.post("/resume",resumeController.resume)

module.exports=router;