const router=require('express').Router();
const jobpostController=require('../controllers/jobpost.js')
console.log("job route")
router.post("/jobpost",jobpostController.jobpost);
router.get("/data",jobpostController.jobdisplay);
router.post("/details",jobpostController.details);
router.post("/jobupdate",jobpostController.jobupdate);
router.post("/data",jobpostController.admin);
router.post("/jobuser",jobpostController.adminuser);
router.post("/delete",jobpostController.deleteuser);
router.post("/updateaccept",jobpostController.updateaccept);
router.post("/updatereject",jobpostController.updatereject);
router.post("/companycheck",jobpostController.companycheck);
router.post("/jobrecommend",jobpostController.jobrecommend);
router.post("/appliedjob",jobpostController.appliedjob);
module.exports=router;