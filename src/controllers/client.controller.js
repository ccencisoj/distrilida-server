const { uuid } = require("../packages");

class ClientController {
  constructor({ ClientService }) {
    this.clientService = ClientService;
  }

  getClient = async (req, res)=> {
    const clientId = req.query.clientId;
    const client = await this.clientService.getClient(clientId);
    return res.json({client});
  }

  listClients = async (req, res)=> {
    const clientList = await this.clientService.listClients();
    return res.json({clientList});
  }

  createClient = async (req, res)=> {
    const clientData = {uuid: uuid(), ...req.body};
    const client = await this.clientService.createClient(clientData);
    return res.json({client});
  }

  updateClient = async (req, res)=> {
    const clientId = req.query.clientId;
    const clientData = req.body;
    const result = await this.clientService.updateClient(clientId, clientData);
    return res.json({result});
  }

  deleteClient = async (req, res)=> {
    const clientId = req.query.clientId;
    const result = await this.clientService.deleteClient(clientId);
    return res.json({result});
  }
}

module.exports = ClientController;