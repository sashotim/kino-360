var mongoose = require("mongoose");

var figureSchema = new mongoose.Schema({
   name: String,
   timestamps: [],
   position: String,
   textures: String,
});

module.exports = mongoose.model("Figure", figureSchema);