class errorfeatures extends Error {
  isOperational: Boolean;
  status: string;
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "Error";
    this.isOperational = true;
  }
}
export { errorfeatures };
