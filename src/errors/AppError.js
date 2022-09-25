class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.name = "AppError";
  }

  toJSON = ()=> {
    return {
      name: this.name,
      status: this.status,
      message: this.message
    }
  }
}

module.exports = AppError;