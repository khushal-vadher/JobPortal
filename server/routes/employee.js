const router=require('express').Router();
const employeeController=require('../controllers/employee.js')


console.log("employee")

router.post("/employeesignup",employeeController.register);
router.post("/employeelogin",employeeController.auth);


module.exports=router;