//Aprogram that will create Netflex TV shows database and apply CRUD to it
//basic coluomns are used like title, actor and director to be searched
const yargs = require ('yargs');//to use yargs
const mongoose = require ('mongoose');//to connect to DB
mongoose.set('strictQuery', true);//avoid warning message
//import functions to be implemented
const {createTVshow , readTV , updateActor,  filterTitle, filterActor,filterYear, deleteTitle}= require ('./movies/function2');
// EXECUTE connection to the DB
require ('./db/connection');
//main programm with arguments input
async function app2 (yargsInput){
    //switch implementation with if to run one of the CRUD functions oe show error
    if (yargsInput.create){
        //code to create TV show and insert TV shows
        const tvObject = {title : yargsInput.title, actor : yargsInput.actor, year:yargsInput.year};
        await createTVshow (tvObject);
    } else if (yargsInput.read){
        //code to show all TV shows
       await  readTV();
 
    }else if (yargsInput.updateActor){
        //code to update actor but search the row with title
        await updateActor (yargsInput.title, yargsInput.actor);
    }else if (yargsInput.filterTitle) {
        // filtered list by specific Title name from database
        
         console.log(await filterTitle({title:yargsInput.title}));
    }else if (yargsInput.filterActor) {
        // filtered list by specefic actor name from database
        
        console.log (await filterActor({title:yargsInput.actor}));

    }else if (yargsInput.filterYear) {
        // filtered list by specefic year  from database
        console.log (await filterYear({title:yargsInput.year}));
    }
    else if (yargsInput.delete){
        //delete row or show by title
        let query = yargsInput.title;
        await deleteTitle (query);
    } else{
        //if console input was wronge
        console.log("command not recognised");
    }
    //disconnect DB or infinite loop
    await mongoose.disconnect();
};
app2(yargs.argv);

//
// node /src/app.js --create  --title "spiderman" --actor  "ho hi" --director "bin bin" --info "good" --rating "5"
// node /src/app.js --read 
// node /src/app.js --updateActor --title "spiderman" --actor "she sho"
  
// node /src/app.js -- updateDirector --title "spiderman" --director "phi pho"
// node /src/app.js -- filterTitle --title "spiderman"
// node /src/app.js --filterActor  --actor "she sho"
// node /src/app.js --filterRating  -- rating "5"
// node /src/app.js --deleteTitle  --title "test2"
