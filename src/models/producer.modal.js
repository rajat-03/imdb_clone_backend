import mongoose, { Schema } from "mongoose";

const producerSchema = new Schema(
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
      require: true,
    },
  },
  { timestamps: true }
);

export const Producer = mongoose.model("Producer", producerSchema);
