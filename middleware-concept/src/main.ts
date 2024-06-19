import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from 'express';

function globalMiddleware(req:Request, res:Response, next: NextFunction){
  console.log("Calling global middleware...")
  next()
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleware)
  await app.listen(3000);
}
bootstrap();
