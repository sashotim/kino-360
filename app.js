var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Video       = require('./models/video'),
    seedDB      = require("./seeds")
    

mongoose.connect("mongodb://localhost:27017/360_kino", {useNewUrlParser: true});    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use( express.static( "public" ) );
seedDB();


    
app.get("/", function(req, res){
    Video.find({}, function(err, allVideos){
        if(err){
            console.log(err);
        } else {
            res.render("landing", {videos:allVideos});
        }
    });
});

app.post("/", function(req, res){
    var name = req.body.name;
    var thumbnail = req.body.thumbnail;
    var leftVideoPath = req.body.leftVideoPath;
    var rightVidoPath = req.body.rightVidoPath;
    var newVideo = {name: name, thumbnail: thumbnail, leftVideoPath: leftVideoPath, rightVidoPath: rightVidoPath};
    Video.create(newVideo, function(err, newVideo){
        if(err){
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});

app.get("/video/new", function(req, res){
   res.render("newVideo.ejs"); 
});

app.get("/:id", function(req, res){
    Video.findById(req.params.id, function(err, foundVideo){
        if(err){
            console.log(err);
        } else {
            console.log(foundVideo)
            //render show template with that campground
            res.render("showVideo", {video: foundVideo});
        }
    });
})


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The 360 Kino Server Has Started!");
});