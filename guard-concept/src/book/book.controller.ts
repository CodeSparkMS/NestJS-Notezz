import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { BookGuard } from "./guard/book.guard";

@Controller('book')
export class BookController{


    @Get('/getAll')
    getAllBooks() {
        return 'Getting all books'
    }

    @Post('/add')
    // @UseGuards(BookGuard)    
    addBook(){
        return 'new book added'
    }

}