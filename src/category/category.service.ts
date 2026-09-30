import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CategoryGetResDto } from './dtos/category_get-res.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity.js';
import { Repository } from 'typeorm';
import { CategoryCreateReqDto } from './dtos/category_create-req.dto.js';


@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category)
  private readonly _repository: Repository<Category>,) { }

  //add category
  async create(dto: CategoryCreateReqDto): Promise<Category> {
    const category = this._repository.create({
      title: dto.title,
      slug: dto.slug,
      image: dto.image,
      is_show: dto.is_show,
      parent_id: dto.parent_id,
      description: dto.description,
    });

    return this._repository.save(category);
  }
  //array of cat
  async getAllCat(): Promise<Category[]> {
    return this._repository.find()
  }

  //1 cat
  async getCatById(id: number): Promise<Category> {
    const category = await this._repository.findOneBy({ id });
    if (!category) {
      throw new NotFoundException(`cat with id ${id} not found`)
    }
    return category
  }
  //put 
  async update(id: number, dto: CategoryCreateReqDto,): Promise<Category> {
    const category = await this.getCatById(id);
    this._repository.merge(category, dto);
    return this._repository.save(category);
  }
  //delete
  async delete(id: number): Promise<void> {
    const category = await this.getCatById(id)
    await this._repository.remove(category)
  }
}

// private categories: CategoryGetResDto[] = [
//   {
//     id: 1,
//     title: "Kyka",
//     image: 'kyka.jpg',
//     slug: "cookie",
//     parent_id: 1
//   },
//   {
//     id: 2,
//     title: "Kyka2",
//     image: 'kyka2.jpg',
//     slug: "cookie",
//     parent_id: 2
//   }
// ];
// getCategories(): CategoryGetResDto[] {
//   return this.categories;
// }

// getCategoryById(id: number): CategoryGetResDto {
//   const category = this.categories.find(
//     category => category.id === id,
//   );
//   if (!category) {
//     throw new NotFoundException(`Category with id ${id} not found`);
//   }
//   return category;
// }
