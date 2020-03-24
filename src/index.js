const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://leomallmann:mallmannleo@cluster0-5pux4.mongodb.net/semanaomni?retryWrites=true&w=majority',{
useNewUrlParser: true,
useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);