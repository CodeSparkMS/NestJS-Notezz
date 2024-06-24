import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";

@Module({
    providers:[],
    imports:[],
    controllers:[BookController]
})
export class BookModule {

}