const express = require("express");
const app = express();

// 🔥 use Docker/Traefik injected port OR fallback to 3000
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("🚀 Deployed from GitHub → VPS!");
});

// IMPORTANT: bind to 0.0.0.0 for Docker
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});