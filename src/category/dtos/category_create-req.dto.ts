import { IsString } from "class-validator";

export class CategoryCreateReqDto {
  @IsString({ message: 'Pole must be string' })
  title: string;

  image?: string;
  
  slug: string; //switch -> http:/localhost:3000/category/PHONES - not number
  parent_id: number | null;

}