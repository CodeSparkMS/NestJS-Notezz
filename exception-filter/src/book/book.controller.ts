import { BadRequestException, Controller, Get, UseFilters } from "@nestjs/common";
import { BookException } from "./book.exception";
import { BookCustomExceptionFilter } from "./book.exceptionFilter";

@Controller('book')
export class BookController{

    @Get()
    getBooks(){
        throw new BadRequestException({
            status:403,
            message:'Access Denied'
        })
        return 'new book added...'
    }


    @Get('customException')
    customException(){
        throw new BookException()
    }


    @Get('customExceptionFilter')
    @UseFilters(BookCustomExceptionFilter)
    customExceptionFilter(){
        throw new BadRequestException()
    }

}