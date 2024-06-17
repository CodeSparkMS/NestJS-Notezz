import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './app.service';

@Controller('book')
export class AppController {
  // constructor(private readonly bookService: BookService) {}
  // public bookService: BookService = new BookService()
  constructor(public bookService: BookService) {}

  @Get()
  @HttpCode(200)
  getHello(): string {
    return this.bookService.getHello();
  }

  // Add Book
  @Post('/add')
  addbook(): string {
    // return 'New Book Added';
    return this.bookService.addbook();
  }

  // Delete Book
  @Delete('/delete')
  deleteBook(): string {
    // return 'Book deleted successfully';
    return this.bookService.deleteBook();
  }

  // Update Book
  @Put('/update')
  updateBook(): string {
    // return 'Book updated successfully';
    return this.bookService.updateBook();
  }

  // Get All Book
  @Get('/get')
  getAllBook(): string {
    // return 'Get all books';
    return this.bookService.getAllBook();
  }

  // Find Book By Id
  @Get('/find/:bookId')
  @HttpCode(200)
  findBookById(@Param() params): string {
    console.log(params);
    return `Book founded for id ${params.bookId}`;
  }
}
