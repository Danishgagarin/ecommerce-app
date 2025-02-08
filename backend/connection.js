const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://danishgagarin09:danish@cluster0.yp0qy.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected");
    });