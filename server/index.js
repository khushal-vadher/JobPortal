const dotenv=require("dotenv");
const mongoose =require('mongoose');
var cors = require('cors')

const express=require('express');
const app=express();
const router=require('express').Router();
dotenv.config({path :'./.env'});
require('./config/dbconnect')
app.use(express.urlencoded({ extended :false}));
app.use(express.json())

app.use(cors());


const port =process.env.port;

app.listen(port,()=>{
console.log(`server is running on ${port} port`);
})
console.log("moanan")