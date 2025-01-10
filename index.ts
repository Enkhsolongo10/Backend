import express, { Request, Response } from 'express';
const cors = require("cors")
const fs = require("node:fs");
const app = express();
const port = 4001;

app.use(express.json());
app.use(cors());



type  Movie = {
    id:number,
    name:string
  };


const findById = (req: Request, res: Response) => {
    const movieId = req.params.id;
    const data = fs.readFileSync("data/movies.json");
    const movies = JSON.parse(data);
    const movie = movies.find((movie:Movie) => movie.id === Number(movieId))
    res.send(movie); 
};



//READ DONE
app.get("/movies", (req, res) => {
    const data = fs.readFileSync("data/movies.json");
    const movies = JSON.parse(data);
    res.json(movies);
});

//CREATE DONE 
app.post("/create", (req, res) => {
    const body = req.body;
    const date = Date.now();
    const data = fs.readFileSync("data/movies.json");
    const movies = JSON.parse(data);
    const newData = {
        id: date,
        ...body,
    };
    movies.push(newData);
    const content = JSON.stringify(movies, null, 4);
    fs.writeFileSync("data/movies.json", content);
    res.send(content);
});


//DELETE DONE
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

    console.log(id,"---")
    const data = fs.readFileSync("data/movies.json");
    const movies = JSON.parse(data);
    const content = movies.filter((movie: Movie) => {
        if (movie.id === Number(id))
            return;
        else {
            return movie;
        }    
    });
    const contentJSON = JSON.stringify(content, null, 4);
    fs.writeFileSync("data/movies.json", contentJSON); 
    res.send({
        message:'done'
    });
});

//UPDATE 
app.put("/update", (req: Request, res) => {
    const id = req.params.id;
    const data = fs.readFileSync("data/movies.json");
    const movies = JSON.parse(data);
});

app.listen(port, ()=>{
    console.log("Backend started on ", port)
});
   


//post --> create buyu write
//put --> update buyu edit

//REST-iin API hugjuulj surch bga 


// Huseltuud --> 
// GET 
// POST --> tsoo shinner uusgene
// GET 
// PUT --> 
// PATCH --> 
// DELETE