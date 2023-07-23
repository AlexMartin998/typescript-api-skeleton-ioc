import chalk from 'chalk';
import { loggerDateFormatter } from './helpers';

export class Logger {
  static _getLogHeader(): string {
    const timestamp = loggerDateFormatter();
    const appInfo = chalk.green(`[App] ${process.pid}`);
    const logHeader = `${appInfo}  - ${timestamp}  `;
    return logHeader;
  }

  static log(message: string): void {
    const logHeader = Logger._getLogHeader();
    console.log(logHeader, chalk.green(`[LOG] ${message}`));
  }

  static info(message: string): void {
    const logHeader = Logger._getLogHeader();
    console.log(logHeader, chalk.yellow(`[INFO] ${message}`));
  }

  static error(message: string): void {
    const logHeader = Logger._getLogHeader();
    console.error(logHeader, chalk.red(`[ERROR] ${message}`));
  }
}
