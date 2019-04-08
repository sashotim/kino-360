var mongoose = require("mongoose");
var Video = require("./models/video");
var Figure   = require("./models/figure");


var videos = [
    {leftVideoPath: '/videos/carotisOP_L.mp4', rightVidoPath: '/videos/carotisOP_R.mp4', name: 'Test Video 1', thumbnail: '/images/test.png', objects: []},
    {leftVideoPath: '/videos/carotisOP_L.mp4', rightVidoPath: '/videos/carotisOP_R.mp4', name: 'Test Video 2', thumbnail: '/images/test.png', objects: []},
    {leftVideoPath: '/videos/carotisOP_L.mp4', rightVidoPath: '/videos/carotisOP_R.mp4', name: 'Test Video 3', thumbnail: '/images/test.png', objects: []},
    {leftVideoPath: '/videos/carotisOP_L.mp4', rightVidoPath: '/videos/carotisOP_R.mp4', name: 'Test Video 4', thumbnail: '/images/test.png', objects: []}
    ];

function seedDB(){
   Video.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed videos!");
        videos.forEach(function(video){
            Video.create(video, function(err, video){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a video");
                }
            });
        });
    });
}

module.exports = seedDB;
