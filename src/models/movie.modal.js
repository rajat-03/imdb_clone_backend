import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    yearOfRelease: {
      type: String,
      require: true,
    },
    plot: {
      type: String,
      require: true,
    },
    poster: {
      type: String,
      require: true,
    },
    producer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Producer",
      required: true,
    },
    actors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actor" }],
  },
  { timestamps: true }
);

export const Movie = mongoose.model("Movie", movieSchema);
