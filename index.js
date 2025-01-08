const express = require("express");
const fs = require("node:fs");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello world!");
});

function createNewMovie(req, res){
    console.log(req.query);
};

app.get("/movies/", (req, res) => {
    const data = fs.readFileSync("data/movies.txt","utf8");
    const movies = JSON.parse(data);
    res.json(movies);
});

app.get("/movies/details", (req, res) => {
    //read one movie
});

app.get("/movies/create", (req, res) => {
    console.log(req.query);

    //const name = req.query.name;
    const { name } = req.query;

    // 1. read json from file
    const data = fs.readFileSync("data/movie.tsx", "utf8");
    const movies = JSON.parse(data);

    // 2. push to json array 
    movies.push({
        id: Date.now(),
        name,
    });
 
    // 3. write json to file 
    const moviesString = JSON.stringify(movies, null, 4);
    fs.writeFileSync("data/movies.txt", moviesString);

    res.json( {message: "Success!"});
});

app.get("/movies/update", (req, res) => {
    // 1. read json from file
    // 2. find the item 
    // 3. update the json array
    // 4. write json to file 
}); 

app.get("/movies/delete", (req, res) => {
    const id = req.query.id 
    const data = fs.readFileSync("data/movie.tsx", "utf8");
    const movies = JSON.parse(data);
    const content = movies.filter((movie) => {
        if(movie.id == id){
            return
        }
        else{
            return movie
        }
    });
    const contentJSON = JSON.stringify(content)
    fs.writeFileSync("data/movies.json", contentJSON)
    res.send("hiii")
});

app.listen( port, () => {
    console.log(`read, http://localhost:${port}`);
    console.log(`create, http://localhost:${port}`);
    console.log(`update, http://localhost:${port}`);
    console.log(`delete, http://localhost:${port}`);
}); 

// // find by id
// app.get('movies/:id', findById);

// // delete by id
// app.delete('movies/:id', deleteById);

// // push by id 
// app.put('movies/:id', pushById);

// //
// app.post('movies/:id', findById);
