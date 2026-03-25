const express = require('express');
const connectDB = require('./models/db')
const path = require('path')
const {saveStudent,getStudents} = require('./controllers/studentController');
const app = express();

const studentRouter = require('./routes/studentRoutes');


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}))




app.get('/',(req,res)=>{
res.render('dashboard')
//  getStudents()
//  .then((st)=>{
//   console.log("reached");
  
//   res.render('students',{st})
//  })
})

app.use('/students',studentRouter);

app.listen(3000,()=>{
  console.log("server started");
  
})

connectDB();