//file that containd details of all CRUD functionality so can be used in other programs
//import TV schema
const MovieCollection = require("./model");
// create TV show first implementation then  insert new rows whenever called
async function createMovie(movieObject) {
        //creat a movie or insert new row on DB
    try {
        console.log(movieObject);
        const newMovie = await MovieCollection.create (movieObject);
        console.log (newMovie);
    } catch (error) {
        console.log(error)
    }
};
//read all movies  and display them on table using for loop
async function readMovies () {
    try {
      
        const results = await MovieCollection.find({}); 
       for (let index = 0; index < results.length; index++) {
         const element = results[index];
         
         console.log(` ==================================================================================
            ${element.title}| With ${element.actor} | Directed by ${element.director} | Rating ${element.rating}`);
       }
        
    } catch (error) {
        console.log(error);
        
    }
};
//update actor information searching by title
async function updateActor (title1, actor1){
    try {
        console.log(title1, actor1);
        let updatedValues= {$set: {actor: actor1}};
        console.log (updatedValues);
        const result = await MovieCollection.updateOne  ({title: title1} , {$set: {actor: actor1}});
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
}
//update director information searching by title
async function updateDirector (title, director){
    try {
        const result = await MovieCollection.updateOne({title: title} , {$set: {director: director}});
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
}
//find specefic one title  information
async function filterTitle  (movieObj){ //other way of export function
   
          try {
            
           
            return  await MovieCollection.findOne({where: {title: movieObj}});
         
         
        } catch (error) {
            console.log(error)
        }
    
}
//find actor one title  information
async function filterActor (movieObj){

   
        try {
           
            return  await MovieCollection.findOne({where: {actor: movieObj}});
        } catch (error) {
            console.log(error)
        }
    }
    //find specefic  rating  information
    async function filterRating (movieObj){

   
        try {
            
            return  await MovieCollection.find({where: {rating: movieObj}});
        } catch (error) {
            console.log(error)
        }
    }
//delete specefic title  row
async function deleteTitle (title){
    try {
        const result = await MovieCollection.deleteOne({title: title});
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
};

//expoerts all functions to be used on app.js
module.exports = {createMovie , readMovies , updateActor, updateDirector, filterTitle, filterActor,filterRating, deleteTitle};