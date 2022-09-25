class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  get = async (uuid)=> {
    const result = await this.model.findOne({uuid});
    return result;
  }

  getAll = async (skip, limit)=> {
    const result = await this.model.find().skip(skip).limit(limit);
    return result;
  }

  create = async (data)=> {
    const result = await this.model.create(data);
    return result;
  }
  
  update = async (uuid, data)=> {
    await this.model.findOneAndUpdate(uuid, data);
    return {updated: true};
  }

  delete = async (uuid)=> {
    await this.model.findOneAndDelete({uuid});
    return {deleted: true};
  }
}

module.exports = BaseRepository;