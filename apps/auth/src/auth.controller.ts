import { Controller, Logger, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  getHello(): string {
    Logger.log('Hello Auth');
    return this.authService.getHello();
  }
  @Post('fe')
  getFe(): string {
    Logger.log('Hello Fe');
    return this.authService.getHello();
  }
}
