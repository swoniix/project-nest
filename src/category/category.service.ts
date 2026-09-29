import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryGetResDto } from './dtos/category_get-res.dto.js';
@Injectable()
export class CategoryService {
  private categories: CategoryGetResDto[] = [
    {
      id: 1,
      title: "Kyka",
      image: 'kyka.jpg',
      slug: "cookie",
      parent_id: 1
    },
    {
      id: 2,
      title: "Kyka2",
      image: 'kyka2.jpg',
      slug: "cookie",
      parent_id: 2
    }
  ];
  getCategories(): CategoryGetResDto[] {
    return this.categories;
  }

  getCategoryById(id: number): CategoryGetResDto {
    const category = this.categories.find(
      category => category.id === id,
    );
    if (!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
    return category;
  }
}
