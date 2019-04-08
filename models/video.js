var mongoose = require("mongoose");

var videoSchema = new mongoose.Schema({
   name: String,
   thumbnail: String,
   leftVideoPath: String,
   rightVideoPath: String,
   figures: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Object'
        }
       ]
});

module.exports = mongoose.model("Video", videoSchema);