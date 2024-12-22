import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import sequelize from './db/dbConect';

async function bootstrap() {
  sequelize
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
