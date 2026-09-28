export class CategoryGetResDto {
  id: number;
  title: string;
  image?: string;
  slug: string; //switch -> http:/localhost:3000/category/PHONES - not number
  parent_id: number | null;
}