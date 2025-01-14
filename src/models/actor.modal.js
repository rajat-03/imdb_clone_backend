import mongoose, { Schema } from "mongoose";

const actorSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    dob: {
      type: String,
      require: true,
    },
    bio: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Actor = mongoose.model("Actor", actorSchema);
