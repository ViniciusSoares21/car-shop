export default class NotFound extends Error {
  public statusCode: number;
  constructor(message:string, statusCode = 404) {
    super(message);

    this.statusCode = statusCode;
  }
}