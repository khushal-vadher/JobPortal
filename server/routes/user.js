const router=require('express').Router();
const userController=require('../controllers/user.js')


router.post("/signup",userController.user);
router.post("/login",userController.auth);


module.exports=router;