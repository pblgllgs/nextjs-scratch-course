import { Controller, Get } from "@nestjs/common";

@Controller('/api')
export class AppController {
    @Get('/hello')
    getRootRoute() {
        return "Hello World!";
    }

    @Get('/bye')
    getByeThere(){
        return "Bye There!";
    }
}