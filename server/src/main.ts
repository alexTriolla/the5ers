import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Enable CORS with specific options
  app.use(
    cors({
      origin: '*', // Allow all origins
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: 'Content-Type, Authorization',
    }),
  );

  const globalPrefix = configService.get<string>('API_PREFIX', 'api/v1');
  app.setGlobalPrefix(globalPrefix);

  const port = configService.get<number>('PORT', 3000);
  await app.listen(port);
}
bootstrap();
