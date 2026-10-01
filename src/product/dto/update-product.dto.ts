import { PartialType } from '@nestjs/mapped-types';
import { CreateProductReqDto } from './create-product.req.dto.js';

export class UpdateProductDto extends PartialType(CreateProductReqDto) { }
