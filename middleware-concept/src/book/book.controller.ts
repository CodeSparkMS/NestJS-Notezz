import { Controller, Get, Post } from "@nestjs/common";

@Controller("book")
export class BookController{

    @Get()
    getBooks(){
        return "Getting all books..."
    }

    @Post()
    addBook(){
        return "New book added..."
    }

}