const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  class:{
    type:String,
    required:true
  },
  phone:{
    type:String,
    required:true
  },
  place:{
    type:String,
    required:true
  },
  admissionDate:{
    type:Date,
    required:true,
    default:Date.now
  }
})

const Std = mongoose.model('Student', studentSchema);
module.exports = Std;