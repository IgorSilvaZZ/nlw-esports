import express from "express";

const app = express();

app.get("/games", (req, res) => {
  return res.json([]);
});

app.post("/ads", (req, res) => {
  return res.status(201).json([]);
});

app.get("/games/:id/ads", (req, res) => {
  const { id } = req.params;

  return res.json([]);
});

app.get("/ads/:id/discord", (req, res) => {
  return res.json([]);
});

app.listen(3333, () => console.log("🎮 Server is Running!"));
