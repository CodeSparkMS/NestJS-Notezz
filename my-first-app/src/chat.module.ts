import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Feature2Module } from './Feature2.module';

@Module({
  imports: [Feature2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class ChatModule {
    constructor(){
        console.log('ChatModule')
    }
}
