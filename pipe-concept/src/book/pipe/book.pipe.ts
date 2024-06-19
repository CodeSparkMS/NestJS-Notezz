import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class BookPipe implements PipeTransform{

    transform(value: any, metadata: ArgumentMetadata) {
        console.log("value...",value)
        if(value.id == 1) return value
        else throw new BadRequestException("Id is not one")
    }

}