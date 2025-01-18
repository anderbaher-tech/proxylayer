class Exception {
  errType: string;
  message: string;
  err?: any;

  constructor(errType: string, message: string, stackTrace?: any) {
    this.errType = errType;
    this.message = message;
    if (stackTrace) {
      this.err = stackTrace;
    }
  }
}

export default Exception;
