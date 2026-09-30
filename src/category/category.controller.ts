import { Controller, Get, Param, Body, Post, ParseIntPipe, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CategoryService } from './category.service.js';
import { CategoryCreateReqDto } from './dtos/category_create-req.dto.js';
import { CategoryGetResDto } from './dtos/category_get-res.dto.js';
import { Category } from './category.entity.js';


@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  // @Get()
  // getAllCategories(): CategoryGetResDto[] {
  //   return this.categoryService.getCategories();
  // }
  // @Get('/:id')
  // getCategoryById(@Param('id') id: string): CategoryGetResDto | undefined {
  //   return this.categoryService.getCategoryById(+id);
  // }

  // @Post()
  // createCategory(@Body() category: CategoryCreateReqDto): CategoryGetResDto {
  //   return {
  //     id: 1,
  //     slug: category.slug,
  //     title: category.title,
  //     parent_id: null
  //   }

  @Post()
  createCategory(
    @Body() category: CategoryCreateReqDto,
  ): Promise<Category> {
    return this.categoryService.create(category);
  }

  @Get()
  getAllCategories(): Promise<Category[]> {
    return this.categoryService.getAllCat();
  }
  @Get('/:id')
  getCategoryById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Category> {
    return this.categoryService.getCatById(id);
  }

  @Put('/:id')
  updateCategory(@Param('id', ParseIntPipe) id: number, @Body() category: CategoryCreateReqDto): Promise<Category> {
    return this.categoryService.update(id, category);
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT) deleteCategory(@Param('id', ParseIntPipe) id: number,): Promise<void> {
    return this.categoryService.delete(id);
  }
}
