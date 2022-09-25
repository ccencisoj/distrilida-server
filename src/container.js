const { createContainer, asClass, asFunction, asValue } = require("awilix");

const config = require("./config");

const { ClientRouter } = require("./routers");
const { ClientController } = require("./controllers");
const { ClientService } = require("./services");
const { ClientValidator } = require("./validators");
const { ClientRepository } = require("./repositories");
const { ClientModel } = require("./models");

const container = createContainer()
  .register({config: asValue(config)})
  .register({ClientRouter: asFunction(ClientRouter)})
  .register({ClientController: asClass(ClientController).singleton()})
  .register({ClientService: asClass(ClientService).singleton()})
  .register({ClientValidator: asClass(ClientValidator).singleton()})
  .register({ClientRepository: asClass(ClientRepository).singleton()})
  .register({ClientModel: asValue(ClientModel)});

module.exports = container;