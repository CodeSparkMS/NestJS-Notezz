import { Controller, Get, Param, Post, Body, ParseIntPipe } from "@nestjs/common";
import { BookDto } from "./dto/book.dto";
import { BookPipe } from "./pipe/book.pipe";

@Controller("book")
export class BookController{

    @Get("/:id")
    getBooks(@Param("id", ParseIntPipe) id:number){
        console.log("ID: ",id,"Type: ",typeof(id))
        return "Getting all books..."
    }

    @Post()
    addBook(@Body(new BookPipe) book:BookDto){
        return book
    }

}