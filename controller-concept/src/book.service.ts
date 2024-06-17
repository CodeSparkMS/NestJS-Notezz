import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  getHello(): string {
    return 'Hello World!';
  }

  addbook(): string {
    return 'New Book Added';
  }

  deleteBook(): string {
    return 'Book deleted successfully';
  }

  updateBook(): string {
    return 'Book updated successfully';
  }

  getAllBook(): string {
    return 'Get all books';
  }

}
