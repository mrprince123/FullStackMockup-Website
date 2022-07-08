const express = require("express");

const Details = require("../models/Detail");
const Slider = require("../models/slider");

const routes = express.Router();

routes.get("/", async (req, res) => {

    const details = await Details.findOne({ "_id": "62c5246e50804de202452371" });
    //console.log(details);

    const slides = await Slider.find();
    // console.log(slides);

    res.render("index", {
        details: details,
        slides: slides
    });
});

routes.get("/gallery", async (req, res) => {

    const details = await Details.findOne({ "_id": "62c5246e50804de202452371" });
    //console.log(details);

    res.render("gallery", {
        details: details
    });

});


module.exports = routes;