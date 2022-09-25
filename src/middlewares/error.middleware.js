const AppError = require("../errors/AppError");

module.exports = (error, req, res, next)=> {
  
  console.log(error);

  return error instanceof AppError ?
    res.status(error.status).json(error.toJSON()) :
    res.status(500).json({status: 500, name: "UnknownError"});
}