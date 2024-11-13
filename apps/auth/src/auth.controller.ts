import { Controller, Get, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    Logger.log('Hello Auth');
    return this.authService.getHello();
  }
  @Get('fe')
  getFe(): string {
    Logger.log('Hello Fe');
    return this.authService.getHello();
  }
}
