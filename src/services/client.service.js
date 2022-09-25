class ClientService {
  constructor({ ClientRepository, ClientValidator }) {
    this.clientRepository = ClientRepository;
    this.clientValidator = ClientValidator;
  }

  getClient = async (clientId)=> {
    if(await this.clientValidator.isValidId(clientId)) {
      const client = await this.clientRepository.get(clientId);
      return client;
    }
  }

  listClients = async ()=> {
    const clientList = await this.clientRepository.getAll();
    return clientList;
  }

  createClient = async (clientData)=> {
    if(await this.clientValidator.isValidCreateData(clientData)) {
      const client = await this.clientRepository.create(clientData);
      return client;
    }
  }

  updateClient = async (clientId, clientData)=> {
    if(await this.clientValidator.isValidUpdateData(clientData)) {
      const result = await this.clientRepository.update(clientId, clientData);
      return result;
    }
  }

  deleteClient = async (clientId)=> {
    if(await this.clientValidator.isValidId(clientId)) {
      const result = await this.clientRepository.delete(clientId);
      return result;
    }
  }
}

module.exports = ClientService;