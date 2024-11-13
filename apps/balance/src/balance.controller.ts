import { Controller, Get, Logger } from '@nestjs/common';
import { BalanceService } from './balance.service';

@Controller()
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get()
  getHello(): string {
    Logger.log('Hello Balance');
    return this.balanceService.getHello();
  }

  @Get('be')
  getBe(): string {
    Logger.log('Hello Be');
    return this.balanceService.getHello();
  }
}
