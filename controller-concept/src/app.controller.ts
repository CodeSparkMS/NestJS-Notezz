import { Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('book')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHello(): string {
    return this.appService.getHello();
  }

  // Add Book
  @Post('/add')
  addbook(): string {
    return 'New Book Added';
  }

  // Delete Book
  @Delete('/delete')
  deleteBook(): string {
    return 'Book deleted successfully';
  }

  // Update Book
  @Put('/update')
  updateBook(): string {
    return 'Book updated successfully';
  }

  // Get All Book
  @Get('/get')
  getAllBook(): string {
    return 'Get all books';
  }

  // Find Book By Id
  @Get('/find/:bookId')
  @HttpCode(200)
  findBookById(@Param() params): string {
    console.log(params);
    return `Book founded for id ${params.bookId}`;
  }
}
