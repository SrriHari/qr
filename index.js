import express from "express";
// import bd from "body-parser";
import fs from "fs";
import srri from "qr-image";

const a = express();

a.use(express.urlencoded({extended:true}));
a.use(express.static("public"));

a.get("/",(req,res) => {
    res.render("../views/main.ejs");
    
});

a.post("/s",(req,res) => {
    // res.render("D:/Web/qr_gen/index.ejs",{
    //     b : req.body["r"]
    // })
    // res.render("index.ejs",{
    //     b : req.body["r"]
    // })
    const b = req.body["r"];
    var qr_svg = srri.image(b);
    qr_svg.pipe(fs.createWriteStream('public/j.jpg'))
    res.render("../views/index.ejs");
});

a.listen(3000,() => {
    console.log("Running");
});