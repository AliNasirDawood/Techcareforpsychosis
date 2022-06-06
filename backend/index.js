const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Component } = require("react");
const app = express();
const QuestionModel = require("./models/question");

const PORT = process.env.PORT || 3003;


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
      'mongodb+srv://Ali:alinasir123@cluster0.ikatapm.mongodb.net/techcare?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("DB Connected");
      }
    );

//Building an API 
//const UserModel = mongoose.model("question",QuestionSchema)

app.get("/getUser", (req, res) => {
    QuestionModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });

app.post("/createUser", async (req, res) => {
    const user = req.body;
    console.log(req.body);
    const newUser = new QuestionModel(user);
    await newUser.save();
    res.json(user);
    
  });





app.listen(PORT,()=> {console.log('successful',PORT)}); //Specify the backend port 

    
