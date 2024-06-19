import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";


@Module({
    imports:[],
    providers:[],
    controllers:[BookController]
})
export class BookModule{
    
}