import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users.module';
import { OrdersModule } from './orders.module';
import { ChatModule } from './chat.module';

@Module({
  imports: [UsersModule, ChatModule,OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('AppModule');
  }
}
