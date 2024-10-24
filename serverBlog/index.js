const express = require('express');
const cors = require('cors');

require('./db')

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api', (req, res) => {
    res.send("hello world")
})

app.listen(2000, () => console.log('app is running at 2000'))