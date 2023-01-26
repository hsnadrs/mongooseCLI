const mongoose = require ('mongoose');
const { string, number } = require('yargs');
const tvModel = new mongoose.Schema ({

title:{
    type : String ,
    unique: true,
    required :true
},
actor :{
    type : String,
    default: "actor not specified"
},
year : {
  
        type : String,
        default: "date not specified"
    }
}

);
const tvShows = mongoose.model ("Mongoose Movie", tvModel);
module.exports = tvShows;