import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";


@Injectable()
export class BookGuard implements CanActivate{
    
    // canActivate(context: ExecutionContext): boolean  {
    //     console.log("BookGuard called")
    //     return true;
    //     // return false;
    // }

    canActivate(context: ExecutionContext): boolean  {
        
        const key = '1234'
        
        const ctx = context.switchToHttp()

        const request = ctx.getRequest<Request>()

        console.log("Request header...",request.headers)

        if(request.header('name') == 'Mohanish'){
            return true
        }
        return false
    }
}