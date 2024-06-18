import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookService } from './book.services';
import { Book } from './data/book.dto';

@Controller()
export class BookController {
  constructor(private bookService: BookService) {}

  @Post('/addBook')
  addBook(@Body() book: Book): string {
    console.log('Request Body: ', book);
    return this.bookService.addBookService(book);
  }

  @Put('/updateBook')
  updateBook(@Body() book: Book) {
    console.log('Request Body: ', book);
    return this.bookService.updateBookService(book);
  }

  @Delete('deleteBook')
  deleteBook(@Body() bookObj): Book[] {
    console.log("Book Id: ",bookObj)
    return this.bookService.deleteBookService(bookObj.bookId);
  }

  @Get('/getAllBook')
  getAllbooks(): Book[] {
    return this.bookService.getAllBooksService();
  }
}
