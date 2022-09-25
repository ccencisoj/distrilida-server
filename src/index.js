const express = require("express");
const mongoose = require("mongoose");
const container = require("./container");
const { errorMiddleware } = require("./middlewares");

const config = container.resolve("config");

const server = express();

// Middlewares
server.use(express.json());

// Routes
server.use("/client", container.resolve("ClientRouter"));

// Handler errors
server.use(errorMiddleware);

// Connect to db
mongoose.connect(config.MONGO_URI).then();

server.listen(config.PORT, ()=> {
  console.log(`Server running on port ${config.PORT}`);
});