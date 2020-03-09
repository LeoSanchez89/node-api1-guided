//  similar to: import express from "express";
const express = require("express");
const shortid = require("shortid");

const server = express();

let hubs = [];

let lessons = [];

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api: "running..." });
})

server.get("/hello", (req, res) => {
    res.status(200).json({ hello: "Web 27" });
})

server.post("/api/hubs", (req, res) => {
    // data from axios request shows up as req.body on server
    const hubInfo = req.body;

    hubInfo.id = shortid.generate();

    hubs.push(hubInfo);

    res.status(201).json(hubInfo);
})

server.get("/api/hub", (req, res) => {
    res.status(200).json(hubs);
})

server.post("/api/lessons", (req, res) => {

    const lessonInfo = req.body;

    lessonInfo.id = shortid.generate();

    lessons.push(lessonInfo);

    res.status(201).json(lessonInfo);
})

server.get("/api/lessons", (req, res) => {
	res.status(200).json(lessons);
});

const PORT = 5005;
server.listen(PORT, () =>
    console.log(`\n ** API running on http://localhost:${PORT} **\n`)
);

// to run server WITHOUT nodemon, use: node index.js. Otherwise, install nodemon and ADD SCRIPT to package.json, npm start

