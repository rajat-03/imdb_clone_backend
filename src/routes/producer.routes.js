import express from "express";
import {
  addProducer,
  deleteProducer,
  getAllProducers,
  getProducerById,
  updateProducer,
} from "../controllers/producer.controller.js";

const route = express.Router();

route.get("/", getAllProducers);
route.post("/", addProducer);
route.get("/:id", getProducerById);
route.put("/:id", updateProducer);
route.delete("/:id", deleteProducer);

export default route;
