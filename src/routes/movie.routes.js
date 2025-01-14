import express from "express"
import { addMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from "../controllers/movie.controller.js"


const route = express.Router()

route.get("/",getAllMovies)
route.post("/",addMovie)
route.get("/:id",getMovieById)
route.put("/:id", updateMovie)
route.delete("/:id",deleteMovie)

export default route