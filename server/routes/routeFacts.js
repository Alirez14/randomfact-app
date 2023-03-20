import express from "express";
import * as fs from "fs";
import { v4 } from "uuid";
import { getRandomFact, getTodayFact } from "../utilities/utilitiesApi.js";
const routerFacts = express.Router();

let favoriteFacts = [];
try {
	fs.existsSync("favoriteFacts.json") &&
		(favoriteFacts = JSON.parse(fs.readFileSync("favoriteFacts.json")));
} catch (err) {
	console.log(err);
}

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

	fs.writeFileSync(
		"favoriteFacts.json",
		JSON.stringify(favoriteFacts, null, 2)
	);
	res.send(favoriteFacts);
});

routerFacts.post("/", async (req, res) => {
	const newFact = req.body;

	newFact.id = v4();
	favoriteFacts.push(newFact);
	fs.writeFileSync(
		"favoriteFacts.json",
		JSON.stringify(favoriteFacts, null, 2)
	);
	res.send(favoriteFacts);
});

routerFacts.delete("/:id", async (req, res) => {
	const id = req.params.id;
	const index = favoriteFacts.findIndex((fact) => fact.id === id);
	favoriteFacts.splice(index, 1);
	fs.writeFileSync(
		"favoriteFacts.json",
		JSON.stringify(favoriteFacts, null, 2)
	);
	res.send(favoriteFacts);
});

routerFacts.put("/:id", async (req, res) => {
	const id = req.params.id;
	console.log(req.body);
	const index = favoriteFacts.findIndex((fact) => fact.id === id);
	favoriteFacts[index] = req.body;
	favoriteFacts[index].id = id;

	fs.writeFileSync(
		"favoriteFacts.json",
		JSON.stringify(favoriteFacts, null, 2)
	);
	res.send(favoriteFacts);
});

export default routerFacts;
