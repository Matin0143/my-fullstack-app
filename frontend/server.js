const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>My Full Stack Application</h1>
        <p>Express frontend is running.</p>
        <a href="/api">Call Flask Backend</a>
    `);
});

app.get("/api", async (req, res) => {
    try {
        const response = await fetch("http://127.0.0.1:5000/api/hello");
        const data = await response.json();

        res.json(data);
    } catch (error) {
        res.status(500).json({
            error: "Backend unavailable"
        });
    }
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Express running on port 3000");
});
