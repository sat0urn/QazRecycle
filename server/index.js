require('dotenv').config()
const express = require("express");
const cors = require('cors');
const fileUpload = require('express-fileupload')
const router = require('./routes/userRouter')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config")
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static("public"))

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
