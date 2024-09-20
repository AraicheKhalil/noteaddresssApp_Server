
require('dotenv').config()
const express = require('express');
const app = express()
const cors = require('cors');
const notFound = require('./Middlewares/notFound');
const router = require('./Router/Notes');
const ConnectToDB = require('./DB/mongo/connect');
const errorHandler = require('./Middlewares/ErrorHandler');

app.use(cors());
app.use(express.json());


app.use('/api/v1/notes',router);
app.use(notFound);
app.use(errorHandler);



const start = () => {
    try {
        ConnectToDB(process.env.MONGO_URL)
        app.listen(process.env.PORT || 5000 , () => console.log('server runing'))
    } catch (error) {
        console.log(error);
    }
}


start()