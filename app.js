const express = require("express");
const bodyparser = require("body-parser");
const hbs = require("hbs");
const mongoose = require('mongoose');
const Details = require("./src/models/Detail")
const Slider = require("./src/models/slider")

const app = express();
const routes = require('./src/routes/main');


app.use(express.static("Public"));
app.use('/', routes);



// (template Engine)

app.set('view engine', 'hbs');
app.set("views", "views");

// We will set the partials
hbs.registerPartials("views/partials");

// Connecting to the mongodb compass database.
mongoose.connect("mongodb://localhost/FullMockup_Website", function(){
    console.log("Data base Connected.");


    // This is the Silder Database.
    // Slider.create([
    //     {
    //         title : "Learn Java in very easy manner",
    //         subTitle : 'Java is one of the most popular language.',
    //         imageUrl : "./static/images/s1.img"
    //     },
    //     {
    //         title : "What is the Django in Python",
    //         subTitle : 'Django is the famous framework of Python.',
    //         imageUrl : "./static/images/s1.img"
    //     },
    //     {
    //         title : "Bootstrap is the css framework.",
    //         subTitle : 'Bootstrap is the popular front end framework.',
    //         imageUrl : "./static/images/s1.img"
    //     }
    // ]);

    // This is the Details Database.
    // Details.create({
    //     brandName: "Full Stack Web",
    //     brandIconUrl : "www.google.com",
    //     links : [
    //         {
    //             label: "Home",
    //             url : "/"
    //         },
    //         {
    //             label: "Services",
    //             url : "/services"
    //         },
    //         {
    //             label : "Gallery",
    //             url : "/gallery"
    //         },
    //         {
    //             label : "About",
    //             url : "/about"
    //         },
    //         {
    //             label : "Contact Us",
    //             url : "/contact-us"
    //         }
    //     ]
    // });
});

app.listen(3000, function(){
    console.log("Server is running on the port 3000");
});


// or we can use env port 

// app.listen(process.env.PORT | 5556, function(){
//     console.log("Server is running on Port");
// })


// This the just the  mockup website . 
// I ma just using the Some technolgogy for the fontend and backend as well
// HTML , CSs, javascript , node , express , mongodb mongoose , NoSql.


