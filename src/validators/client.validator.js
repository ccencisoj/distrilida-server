const Joi = require("joi");
const AppError = require("../errors/AppError");

class ClientValidator {
  isValidId = async (id)=> {
    return true;
  }

  isValidCreateData = async (createData)=> {
    const createDataSchema = Joi.object({
      uuid: Joi.string().required(),
      name: Joi.string().min(4).max(32).required(),
      nDocument: Joi.number().min(10**9).required()
    });

    const result = createDataSchema.validate(createData);

    if(result.error) 
      throw new AppError(result.error.details[0].message, 400);

    return true;
  } 

  isValidUpdateData = async ()=> {
    return true;
  }
}

module.exports = ClientValidator;