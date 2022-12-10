const express = require('express');
const app = express();
const randomRouter = require('./routes/route.random');
const allUsers = require('./routes/route.allUser');
const PORT = 3000;


app.use('/user/random', randomRouter);
app.use('/user/all', allUsers);

app.listen(PORT, () => {
    console.log('Server Running with : ', PORT)
})