const express = require('express');
require('dotenv').config();
const connectDB = require('./models/db');
const path = require('path');
const app = express();

const studentRouter = require('./routes/studentRoutes');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('dashboard');
});

app.use('/students', studentRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});

connectDB();