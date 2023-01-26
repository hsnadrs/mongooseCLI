//file that containd details of all CRUD functionality so can be used in other programs
//import TV schema
const tvShows = require("./model2");
// create TV show first implementation then  insert new rows whenever called
async function createTVshow(TVObject) {
    //creat a TV show or insert new row on DB
    try {
        console.log(TVObject);
        const newTV = await tvShows.create (TVObject);
        console.log (newTV);
    } catch (error) {
        console.log(error)
    }
};
//read all TV shows and display them on table using for loop
async function readTV () {
    try {
      
        const results = await tvShows.find({}); 
       for (let index = 0; index < results.length; index++) {
         const element = results[index];
         
         console.log(` =============================================
            ${element.title}| With ${element.actor} | year by ${element.year} |`);
       }
        
    } catch (error) {
        console.log(error);
        
    }
};
//update actor information
async function updateActor (title1, actor1){
    try {
        console.log(title1, actor1);
        let updatedValues= {$set: {actor: actor1}};
        console.log (updatedValues);
        const result = await tvShows.updateOne  ({title: title1} , {$set: {actor: actor1}});
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
}
//find specefic one title  information
async function filterTitle  (TVObject){ //other way of export function
   
          try {
            
            
        
                return  await tvShows.findOne( {where: {title: movieObj}});
         
        } catch (error) {
            console.log(error)
        }
    
    
}
//find specefic actor  information

async function filterActor (movieObj){

   
        try {
            
            return  await tvShows.findOne({where: {actor: movieObj}});
        } catch (error) {
            console.log(error)
        }
    }

    //find specefic year  information

    async function filterYear (TVObj){

   
        try {
           
            return  await tvShows.find({where: {year: TVObj}});
        } catch (error) {
            console.log(error)
        }
    }
//delete specefic title  row

async function deleteTitle (title){
    try {
        const result = await tvShows.deleteOne({title: title});
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
};

//export all functions to be used in app2
module.exports = {createTVshow , readTV , updateActor,  filterTitle, filterActor,filterYear, deleteTitle};