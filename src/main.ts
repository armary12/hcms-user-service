import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const moduleRoutingPath = `/${process.env.MODULE}`
  app.setGlobalPrefix('api'+moduleRoutingPath);
  // const cors: string[] = process.env.CORS.split(',');   
  app.enableCors();

  const port = parseInt(process.env.PORT, 10) || 3000;
  await app.listen(port);
}
bootstrap();
