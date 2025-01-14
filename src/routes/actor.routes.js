import express from "express";
import {
  deleteActor,
  getActorById,
  getAllActors,
  registerActor,
  updateActor,
} from "../controllers/actor.controller.js";

const route = express.Router();

route.get("/", getAllActors);
route.post("/", registerActor);
route.get("/:id", getActorById);
route.put("/:id", updateActor);
route.delete("/:id", deleteActor);

export default route;
