export default class BadRequest extends Error {
  public statusCode: number;
  constructor(message:string, statusCode = 422) {
    super(message);

    this.statusCode = statusCode;
  }
}