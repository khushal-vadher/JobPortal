const mongoose = require("mongoos de");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlparser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log("connection failed"));
