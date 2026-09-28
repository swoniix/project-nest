import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    
   }

  @Get('/kyka/:id')
  getKykaById(@Param('id') id: string): string {
    return `Hello Kyka! Your id is ${+id} `
  }

  @Get('/kyka/:title')
  getKykaByTitle(@Param('title') title: string): string {
    return `Hello ${title}!`
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
