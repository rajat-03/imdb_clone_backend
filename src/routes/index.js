import express from "express";
import movieRoutes from "./movie.routes.js";
import actorRoutes from "./actor.routes.js";
import producerRoutes from "./producer.routes.js";

const routes = express.Router();

routes.use("/api/movies", movieRoutes);
routes.use("/api/actors", actorRoutes);
routes.use("/api/producers", producerRoutes);

export default routes;
