import { Controller, Get, Post } from "@nestjs/common";

@Controller("user")
export class UserController{

    @Get()
    getUsers(){
        return "Getting all users..."
    }

    @Post()
    addUser(){
        return "New user added..."
    }

}