import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { BookDto } from "../dto/book.dto";
import { validate } from "class-validator";

export class BookPipe implements PipeTransform{

    async transform(value: any, metadata: ArgumentMetadata) {

        // Using class transformer convert object to class

        const convertedClass = plainToInstance(BookDto, value)
        console.log("Converted Class...",convertedClass)
        // class validation

        const errors = await validate(convertedClass)
        console.log("Errors...",errors)

        if(errors.length > 0 ) {
            console.log("In if block")
            throw new BadRequestException("Validation failed"+ JSON.stringify(errors))
        }

        return value

        // console.log("value...",value)
        // if(value.id == 1) return value
        // else throw new BadRequestException("Id is not one")
    }

}