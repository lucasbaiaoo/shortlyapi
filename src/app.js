import express from "express";
import cors from "cors";
import signUpRoute from "./routes/signUpRoute.js";
import signInRoute from "./routes/signInRoute.js";
import shortenUrlsRoute from "./routes/shortenUrlsRoute.js";
import getUrlRoute from "./routes/getUrlRoute.js";
import openUrlRoute from "./routes/openUrlRoute.js";

const server = express();
server.use(cors());
server.use(express.json());
server.use(signUpRoute);
server.use(signInRoute);
server.use(shortenUrlsRoute);
server.use(getUrlRoute);
server.use(openUrlRoute);

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server running in port: ${port}`));