import { Injectable } from '@angular/core';
import { LogService } from '../service/log.service';

export class Exec {
  constructor(public log: string, public fn?: () => any) {}
}
@Injectable({
  providedIn: 'root',
})
export class ExampleService {

  constructor(private logService: LogService) {}

  do(
    source: string,
    timeout: number,
    clearLogs: boolean,
    commands: Exec[]
  ): void {
    if (clearLogs) {
      this.logService.clear();
    }
    commands.forEach((command, index) => {
      setTimeout(() => {
        // first exec
        const result = command.fn ? command.fn() : '';
        // then log!
        this.logService.log(source, command.log + result);
      }, timeout * index + timeout);
    });
  }
}
