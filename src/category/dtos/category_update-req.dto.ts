import { PartialType } from '@nestjs/mapped-types';
import { CategoryCreateReqDto } from './category_create-req.dto.js';

// Все поля CategoryCreateReqDto становятся необязательными
export class CategoryUpdateReqDto extends PartialType(
  CategoryCreateReqDto,
) { }