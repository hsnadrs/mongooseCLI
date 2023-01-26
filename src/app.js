//Aprogram that will create Movies database and apply CRUD to it
//more coluomn are added like INFO and RATING to be searched
const yargs = require ('yargs');//to use yargs
const mongoose = require ('mongoose');//to connect to DB
mongoose.set('strictQuery', true);//avoid warning message
//import functions to be implemented
const {createMovie, readMovies , updateActor, deleteTitle, updateDirector, filterTitle, filterActor, filterRating}= require ('./movies/function');
// EXECUTE connection to the DB
require ('./db/connection');
//main programm with arguments input
async function app (yargsInput){
        //switch implementation with if to run one of the CRUD functions oe show error
    if (yargsInput.create){
         // create movie row or  insert  movie into database
        const MovieObject = {title : yargsInput.title, actor : yargsInput.actor, director : yargsInput.director, otherInfo:yargsInput.other, rating: yargsInput.rating};
        await createMovie (MovieObject);
    } else if (yargsInput.read){
        //list all movies in DB
       await  readMovies();
 
    }else if (yargsInput.updateActor){
                 // update actor by movie Title name from database
        await updateActor (yargsInput.title, yargsInput.actor);
    }else if (yargsInput.updateDirector){
                 // update director by movie Title name from database
        await updateDirector (yargsInput.title, yargsInput.director);

    }else if (yargsInput.filterTitle) {
        
         // filtered list by Title name from database
         console.log(await filterTitle({title:yargsInput.title}));
    }else if (yargsInput.filterActor) {
        // filtered list by actor name from database
        
        console.log (await filterActor({actor:yargsInput.actor}));

    }else if (yargsInput.filterRating) {
        // filtered list by rating  name from database
        console.log (await filterRating({rating:yargsInput.rating}));
    }
    else if (yargsInput.delete){
                //delete row or movie  by title
        let query = yargsInput.title;
        await deleteTitle (query);
    } else{
                //if console input was wronge
        console.log("command not recognised");
    }
        //disconnect DB or infinite loop
    await mongoose.disconnect();
};
app(yargs.argv);
// node /src/app.js --create  --title "spiderman" --actor  "ho hi" --director "bin bin" --info "good" --rating "5"
// node /src/app.js --read 
// node /src/app.js --updateActor --title "spiderman" --actor "she sho"
  
// node /src/app.js -- updateDirector --title "spiderman" --director "phi pho"
// node /src/app.js -- filterTitle --title "spiderman"
// node /src/app.js --filterActor  --actor "she sho"
// node /src/app.js --filterRating  -- rating "5"
// node /src/app.js --deleteTitle  --title "test2"
