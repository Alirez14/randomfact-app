import express from "express";
import { v4 } from "uuid";
import { getRandomFact, getTodayFact } from "../utilities/utilitiesApi.js";
const routerFacts = express.Router();

const favoriteFacts = [];

routerFacts.get("/:lang/random", async (req, res) => {
	const langParameter = req.params.lang;
	const data = await getRandomFact(langParameter);
	res.send(data);
});

routerFacts.get("/:lang/today", async (req, res) => {
	const langParameter = req.params.lang;
	const data = await getTodayFact(langParameter);
	res.send(data);
});

routerFacts.get("/favorites/", async (req, res) => {
	res.send(favoriteFacts);
});

routerFacts.post("/favorites/", async (req, res) => {
	const newFact = req.body;
	favoriteFacts.push(newFact);
	res.send(favoriteFacts);
});

routerFacts.post("/", async (req, res) => {
	const newFact = req.body;
	console.log(newFact);
	newFact.id = v4();
	favoriteFacts.push(newFact);
	res.send(favoriteFacts);
});

routerFacts.delete("/:id", async (req, res) => {
	const id = req.params.id;
	const index = favoriteFacts.findIndex((fact) => fact.id === id);
	favoriteFacts.splice(index, 1);
	res.send(favoriteFacts);
});

routerFacts.put("/:id", async (req, res) => {
	const id = req.params.id;
	const index = favoriteFacts.findIndex((fact) => fact.id === id);
	favoriteFacts[index] = req.body;
	favoriteFacts[index].id = id;
	res.send(favoriteFacts);
});

export default routerFacts;
