import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Feature1Module } from './feature1.module';

@Module({
  imports: [Feature1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class UsersModule {
  constructor() {
    console.log('UsersModule');
  }
}
