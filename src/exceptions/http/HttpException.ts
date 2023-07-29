export abstract class HttpException extends Error {
  public status: number;

  constructor(message: string, statusCode: number) {
    super(message);

    this.name = 'HttpException';
    this.status = statusCode;
  }
}
