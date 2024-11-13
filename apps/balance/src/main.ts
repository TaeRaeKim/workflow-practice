import { NestFactory } from '@nestjs/core';
import { BalanceModule } from './balance.module';

async function bootstrap() {
  const app = await NestFactory.create(BalanceModule);
  await app.listen(process.env.port ?? 3100, '0.0.0.0');
}
bootstrap();
