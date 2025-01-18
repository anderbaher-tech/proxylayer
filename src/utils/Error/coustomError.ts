class CustomError extends Error {
  status: any;
  constructor(message: any = "Internal Server Error", status: any = 500) {
    super(message);

    this.status = status;
    this.name = this.constructor.name;
  }
}

export default CustomError;
