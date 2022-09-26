import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { convertHourStringToMinutes } from "./utils/convert-hour-string-to-minutes";
import { convertMinutesToHourString } from "./utils/convert-minutes-to-hours-string";

const app = express();
const prisma = new PrismaClient({
  log: ["query"],
});

app.use(express.json());
app.use(cors());

app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return res.json(games);
});

app.post("/games/:id/ads", async (req, res) => {
  const { id: gameId } = req.params;

  const {
    name,
    yearsPlaying,
    discord,
    weekDays,
    hourStart,
    hourEnd,
    useVoiceChannel,
  } = req.body;

  const ad = await prisma.ad.create({
    data: {
      name,
      yearsPlaying,
      discord,
      weekDays: weekDays.join(","),
      hourStart: convertHourStringToMinutes(hourStart),
      hourEnd: convertHourStringToMinutes(hourEnd),
      useVoiceChannel,
      gameId,
    },
  });

  return res.status(201).json(ad);
});

app.get("/games/:id/ads", async (req, res) => {
  const { id: gameId } = req.params;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      hourEnd: true,
      weekDays: true,
      hourStart: true,
      yearsPlaying: true,
      useVoiceChannel: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const adsFormatted = ads.map((ad) => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(","),
      hoursStart: convertMinutesToHourString(ad.hourStart),
      hourEnd: convertMinutesToHourString(ad.hourEnd),
    };
  });

  return res.json(adsFormatted);
});

app.get("/ads/:id/discord", async (req, res) => {
  const { id } = req.params;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id,
    },
  });

  return res.json(ad);
});

app.listen(3333, () => console.log("🎮 Server is Running!"));
