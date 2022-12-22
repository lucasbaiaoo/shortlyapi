import express from "express";
import cors from "cors";
import signUpRoute from "./routes/signUpRoute.js";
import signInRoute from "./routes/signInRoute.js";

const server = express();
server.use(cors());
server.use(express.json());
server.use(signUpRoute);
server.use(signInRoute);

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server running in port: ${port}`));