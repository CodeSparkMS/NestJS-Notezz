import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class BookMiddleware implements NestMiddleware{
    use(req:Request, res:Response, next:NextFunction){
        console.log("Module based Middleware...")
        next()
    }
}