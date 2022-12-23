import express from "express";
import cors from "cors";
import signUpRoute from "./routes/signUpRoute.js";
import signInRoute from "./routes/signInRoute.js";
import shortenUrlsRoute from "./routes/shortenUrlsRoute.js";
import urlRoute from "./routes/urlRoute.js";
import openUrlRoute from "./routes/openUrlRoute.js";
import deleteUrlRoute from "./routes/deleteUrlRoute.js";
import userUrlsRoute from "./routes/userUrlsRoute.js";
import rankingRoute from "./routes/rankingRoute.js";

const server = express();
server.use(cors());
server.use(express.json());
server.use(signUpRoute);
server.use(signInRoute);
server.use(shortenUrlsRoute);
server.use(urlRoute);
server.use(openUrlRoute);
server.use(deleteUrlRoute);
server.use(userUrlsRoute);
server.use(rankingRoute);

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server running in port: ${port}`));