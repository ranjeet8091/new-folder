const express = require("express");
const { createClient } = require("redis");
const redisClient = createClient();
const app = express();
const PORT = 3000;

async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // Corrected URL
    const data = await response.json();
    return data; // Removed res.json(data) since res is not available here
}

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/jsonData", async (req, res) => {
    try {
        const data = await fetchData();
        res.json(data); // Send the fetched data as a response
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

async function init() {
    console.log("Connecting to redis server");
    try {
        await redisClient.connect();
        console.log("Connected to redis server");
        app.listen(PORT, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Server Listening On Port ${PORT}`);
            }
        });
    } catch (error) {
        console.error("Failed to connect to Redis:", error);
    }
}

init();