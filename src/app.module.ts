import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CategoryModule } from './category/category.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    //connection tp postgres
    TypeOrmModule.forRoot({
      type: "postgres",
      host: 'localhost',
      port: 5432,
      username: 'swoniix',
      password: 'q1w2e3r4//2',
      database: 'library',
      autoLoadEntities: true, //types
    })
    , CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
