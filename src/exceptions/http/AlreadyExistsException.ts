import { HttpException } from './HttpException';

export class AlreadyExistsException extends HttpException {
  constructor(message: string) {
    super(message, 400);
    this.name = 'AlreadyExistsException';
  }
}
