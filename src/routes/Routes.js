const express = require("express");

const routes = express.Router();

const NoteController = require("../controllers/NoteControler");

routes.get("/notes", NoteController.index);
routes.post("/notes", NoteController.store);
routes.get("/notes/:id", NoteController.show);
routes.put("/notes/:id", NoteController.update);
routes.delete("/notes/:id", NoteController.destroy);
module.exports = routes;
