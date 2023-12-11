const dotenv=require("dotenv");
var cors = require('cors')

const express=require('express');
const app=express();
const router=require('express').Router();
dotenv.config({path :'./.env'});
require('./config/dbconnect')
app.use(express.urlencoded({ extended :false}));
app.use(express.json())

app.use(cors());

const userRoutes = require('./routes/user');
const employeeRoutes = require('./routes/employee');
const jobpostRoutes = require('./routes/jobpost');
const resumeRoutes = require('./routes/resume');

app.use(userRoutes);
app.use(employeeRoutes);
app.use(jobpostRoutes);
app.use(resumeRoutes);

const port =process.env.port;

app.listen(port,()=>{
console.log(`server is running on ${port} port`);
})