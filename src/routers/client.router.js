const { Router } = require("express");

module.exports = ({ ClientController })=> {
  const router = Router();

  router.get("/", ClientController.getClient);
  router.get("/list", ClientController.listClients);
  router.post("/", ClientController.createClient);
  router.put("/", ClientController.updateClient);
  router.delete("/", ClientController.deleteClient);

  return router;
}