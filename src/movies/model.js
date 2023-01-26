const mongoose = require ('mongoose');
const { string } = require('yargs');
const movieModel = new mongoose.Schema ({

title:{
    type : String ,
    unique: true,
    required :true
},
actor :{
    type : String,
    default: "actor not specified"
},
director : {
  
        type : String,
        default: "director not specified"
    },
    otherInfo : {
  
        type : String,
        default: "otherinfo  not specified"
    },
    rating : {
  
        type : String,
        default: "rating not specified"
    }
}

);
const MovieCollection = mongoose.model ("Mongoose Movie", movieModel);
module.exports = MovieCollection;