import { Movie } from "../models/movie.modal.js";
import cloudinary from "../utils/cloudinary.js";

// add movie
export const addMovie = async (req, res) => {
  const { name, yearOfRelease, plot, poster, producer: producerId, actors:actorIds } = req.body;

  try {

    const uploadResponse = await cloudinary.uploader.upload(poster, {
      folder: "IMDB_Clone",
    });

    // Create a new movie
    const newMovie = new Movie({
      name,
      yearOfRelease,
      plot,
      poster: uploadResponse.secure_url,
      producer: producerId,
      actors: actorIds,
    });

    await newMovie.save();
    res
      .status(201)
      .json({ message: "Movie created successfully", movie: newMovie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// get all movies
export const getAllMovies = async (req, res) => {
  try {
    const moviesList = await Movie.find({});
    return res.status(200).json(moviesList);
  } catch (error) {
    console.log("Failed to get movie list", error);
    res.status(500).json("Failed to get movie list");
  }
};

// delete movie
export const deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findByIdAndDelete(id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// get movie by id
export const getMovieById = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// update movie
export const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { name, yearOfRelease, plot, poster, producer: producerId, actors: actorIds } = req.body;

  try {
    let updatedData = {
      name,
      yearOfRelease,
      plot,
      producer: producerId,
      actors: actorIds,
    };

    if (poster) {
      const uploadResponse = await cloudinary.uploader.upload(poster, {
        folder: "IMDB_Clone",
      });
      updatedData.poster = uploadResponse.secure_url;
    }

    const updatedMovie = await Movie.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({ message: "Movie updated successfully", movie: updatedMovie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

