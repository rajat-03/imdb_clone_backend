import { Actor } from "../models/actor.modal.js";


// get all actors
export const getAllActors = async (req, res) => {
    try {
        const actorsList = await Actor.find({});
        return res.status(200).json(actorsList);
    } catch (error) {
        console.log("Failed to get actor list", error);
        res.status(500).json("Failed to get actor list");
    }
};


// register actor
export const registerActor = async (req, res) => {
  try {
    const { name, gender, dob, bio } = req.body;

    if (!name || !gender || !dob || !bio) {
      return res.status(400).json("All fields are required");
    }

    const actor = await Actor.create({
      name,
      gender,
      dob,
      bio,
    });

    if (!actor) {
      return res.status(400).json("Failed to register actor");
    }

    return res
      .status(201)
      .json({ message: "Actor registered successfully", actor });
  } catch (error) {
    console.log("Failed to register actor", error);
    res.status(500).json("Failed to register actor");
  }
};

// delete actor
export const deleteActor = async (req, res) => {
  try {
    const { id } = req.params;

    const actor = await Actor.findByIdAndDelete(id);

    if (!actor) {
      return res.status(404).json("Actor not found");
    }

    return res.status(200).json({ message: "Actor deleted successfully" });
  } catch (error) {
    console.log("Failed to delete actor", error);
    res.status(500).json("Failed to delete actor");
  }
};

// get actor by id
export const getActorById = async (req, res) => {
  try {
    const { id } = req.params;

    const actor = await Actor.findById(id);

    if (!actor) {
      return res.status(404).json("Actor not found");
    }

    return res.status(200).json(actor);
  } catch (error) {
    console.log("Failed to get actor", error);
    res.status(500).json("Failed to get actor");
  }
};


// update actor
export const updateActor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, gender, dob, bio } = req.body;

    if (!name || !gender || !dob || !bio) {
      return res.status(400).json("All fields are required");
    }

    const actor = await Actor.findByIdAndUpdate(
      id,
      { name, gender, dob, bio },
      { new: true }
    );

    if (!actor) {
      return res.status(404).json("Actor not found");
    }

    return res.status(200).json({ message: "Actor updated successfully", actor });
  } catch (error) {
    console.log("Failed to update actor", error);
    res.status(500).json("Failed to update actor");
  }
};