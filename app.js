const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRouter = require('./Router/authRouter');
const config = require('./Config/constants')

require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(`mongodb://localhost:27017/delivery`, {
        useNewUrlParser: true,
        useUnifiedTopology : true
    })
    .then(() => {
        console.log('Mongoose connected')
    })
    .catch(err => console.log(err));

app.use('/api/auth', authRouter);
// app.use('/api/user', userRouter);

app.listen(3001, () => {
    console.log('listening on port 3001')
})