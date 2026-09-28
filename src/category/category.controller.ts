import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { CategoryService } from './category.service.js';
import { CategoryCreateReqDto } from './dtos/category_create-req.dto.js';
import { CategoryGetResDto } from './dtos/category_get-res.dto.js';


@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }
  @Get()
  getAllCategories(): CategoryGetResDto[] {
    return this.categoryService.getCategories();
  }
  @Get('/:id')
  getCategoryById(@Param('id') id: string): CategoryGetResDto | undefined {
    return this.categoryService.getCategoryById(+id);
  }

  @Post()
  createCategory(@Body() category: CategoryCreateReqDto): CategoryGetResDto {
    return {
      id: 1,
      slug: category.slug,
      title: category.title,
      parent_id: null
    }
  }
}
