import { Module } from '@nestjs/common';
import { BookService } from './book.services';
import { BookController } from './book.controller';

@Module({
  imports: [BookModule],
  providers: [BookService],
  controllers: [BookController],
})

export class BookModule {}
