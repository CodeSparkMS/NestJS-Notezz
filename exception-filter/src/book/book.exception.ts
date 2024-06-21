import { HttpException, HttpStatus } from "@nestjs/common";

export class BookException extends HttpException{
    constructor(){
        super('something wrong happens...',HttpStatus.I_AM_A_TEAPOT)
    }
}