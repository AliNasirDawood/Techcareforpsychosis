const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({

question1 : {
      type: String,
  },
  question2 : {
    type: String,
},
question3 : {
  type: String,
},
question4 : {
  type: String,
}
});



const QuestionModel = mongoose.model("question", QuestionSchema);
module.exports = QuestionModel;