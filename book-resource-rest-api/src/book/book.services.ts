import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public book: Book[] = [];

  //add book
  addBookService(book: Book): string {
    book.id = uuidv4();
    console.log('BookId:...', book.id);
    this.book.push(book);
    return 'New book added.';
  }

  //update book
  updateBookService(book: Book): string {
    const index = this.book.findIndex((bk) => {
      return bk.id == book.id;
    });

    console.log('Book ndex: ', index);

    this.book[index] = book;

    return 'Book Updated';
  }

  // delete book
  deleteBookService(bookid: string): Book[] {
    const newBooksArray = this.book.filter((bk) => bk.id != bookid);
    this.book = newBooksArray;
    // console.log("New Books Array...",newBooksArray)
    // console.log("Books...",this.book)
    // return "book deleted successfully"
    return this.book;
    // return newBooksArray
  }

  // get all books
  getAllBooksService() {
    return this.book;
  }

}
