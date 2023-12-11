const router=require('express').Router();
const jobpostController=require('../controllers/jobpost.js')
console.log("job route")
router.post("/jobpost",jobpostController.jobpost);
router.get("/data",jobpostController.jobdisplay);
router.post("/details",jobpostController.details);
module.exports=router;