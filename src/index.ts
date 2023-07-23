import { container } from './config/container';
import { Server } from './server';

export const server = container.resolve<Server>('Server');
server.listen();
