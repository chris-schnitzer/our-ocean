const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = {
	origin: "*",
	credentials: true,
	optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

const bodyparser = require("body-parser");
app.use(express.json());
require("dotenv").config({ path: "./config.env" });
const { MongoClient } = require("mongodb");
const url =  process.env.DB_URI;

const router = express();

const ObjectId = require('mongodb').ObjectId;

const client = new MongoClient(url);
const dbName = "ourocean";
const db = client.db(dbName);
const newsCol = db.collection("news");
const eventsCol = db.collection("events");

client.connect();

// routes 
app.use("/", router);

app.get("/news", async(req, res) => {
	const getData = await newsCol.find({}).toArray();
	res.send(getData);
})

app.get("/news/:id", async(req, res) => {
 	let collection = await newsCol;
 	let query  = {_id: new ObjectId(req.params.id)};
 	let result = await collection.findOne(query);
 	if(!result) res.send("not found").status(404);
 	else res.send(result).status(200);
});

app.get("/events", async(req, res) => {
	const getData = await eventsCol.find({}).toArray();
	res.send(getData);
});

app.get("/events/:id", async(req, res) => {
	let collection = await eventsCol;
 	let query  = {_id: new ObjectId(req.params.id)};
 	let result = await collection.findOne(query);
 	if(!result) res.send("not found").status(404);
 	else res.send(result).status(200);
})

// server
const port = process.env.PORT;
const server = app.listen(port, () => {
	console.log(`Server running on port ${port}`);
})