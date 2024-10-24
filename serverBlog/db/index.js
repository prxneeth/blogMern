const mongoose = require('mongoose');


mongoose.set('strictQuery', false)

mongoose.connect('mongodb+srv://prxneethh:prxneethh123@cluster0.otrxt.mongodb.net/').then(() => console.log('Connected to Mongo DB')).catch((e) => console.log(e))