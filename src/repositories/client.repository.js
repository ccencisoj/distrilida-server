const BaseRepository = require('./base.repository');

class ClientRepository extends BaseRepository {
  constructor({ ClientModel }) {
    super(ClientModel);
  }
}

module.exports = ClientRepository;