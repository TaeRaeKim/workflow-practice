import { Controller, Post, Logger } from '@nestjs/common';
import { BalanceService } from './balance.service';

@Controller()
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Post()
  getHello(): string {
    Logger.log('Hello Balance!');
    return this.balanceService.getHello();
  }

  @Post('be')
  getBe(): string {
    Logger.log('Hello 65!');
    return this.balanceService.getHello();
  }
}
