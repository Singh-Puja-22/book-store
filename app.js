const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books",router);

// app.use('/', (req,res,next) => {
//     res.send("This is our starting app");
// });

mongoose.connect(
    "mongodb+srv://Admin:admin1234@cluster0.ykm2y.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log("Connected to database")
).then(() => {
    app.listen(5000);
}).catch((err) => console.log(err));
